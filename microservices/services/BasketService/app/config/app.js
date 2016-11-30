"use strict";

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _basketRoutes = require('../routes/basketRoutes');

var _basketRoutes2 = _interopRequireDefault(_basketRoutes);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _identity = require('../common/security/identity');

var _identity2 = _interopRequireDefault(_identity);

var _logger = require('../common/logging/logger');

var _logger2 = _interopRequireDefault(_logger);

var _error = require('../common/errors/error');

var _error2 = _interopRequireDefault(_error);

var _cors = require('../common/security/cors');

var _cors2 = _interopRequireDefault(_cors);

var _cors3 = require('cors');

var _cors4 = _interopRequireDefault(_cors3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var corsOptions = null;
_cors2.default.getOptions(function (options) {
    corsOptions = {
        origin: [options]
    };
});

app.use((0, _cors4.default)(corsOptions));

function configureApplication(app) {
    configureSecurity(app);
    ValidateContent(app);
    configureSettings(app);
    configureRoutes(app);
    configureErrorHandler(app);
    startServer(app);
}

function configureSettings(app) {
    app.use(_bodyParser2.default.json({ limit: '100kb' }));

    app.use(function (req, res, next) {
        res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');
        res.type('application/json');

        next();
    });
}

function configureSecurity(app) {
    app.use(function (req, res, next) {

        _identity2.default.validateIdentity(req, function (isValid) {

            if (!isValid) {
                throw new _error2.default("UnAuthorized", 401, 'Identity is not Valid');
            }
            next();
        });
    });
}

function ValidateContent(app) {
    app.use('/basket/', function (req, res, next) {

        var contype = req.headers['content-type'];
        if (!contype || contype.indexOf('application/json') !== 0) throw new _error2.default("BadRequest", 400, 'Content is not Valid');
        next();
    });
}

function configureRoutes(app) {
    app.use('/', _basketRoutes2.default);
}

function configureErrorHandler(app) {
    app.use(function (err, req, res, next) {
        if (err) {

            if (err.statusCode == undefined || null) {
                err.statusCode = 500;
            }
            if (err.message == undefined || null) {
                err.message = 'Error Occured';
            }

            switch (err.name) {
                case 'UnAuthorized':
                    _logger2.default.error('Error Name: %s, Error Message: %s, Error StatusCode:%s,Error Stack:%s', err.name, err.message, err.statusCode, err.stack);
                    res.status(err.statusCode).json({ message: err.name + ' ' + err.message, statusCode: err.statusCode });
                    res.end();
                    break;
                case 'BadRequest':
                    _logger2.default.error('Error Name: %s, Error Message: %s, Error StatusCode:%s,Error Stack:%s', err.name, err.message, err.statusCode, err.stack);
                    res.status(err.statusCode).json({ message: err.name + ' ' + err.message, statusCode: err.statusCode });
                    res.end();
                    break;
                case 'InternalError':
                    _logger2.default.error('Error Name: %s, Error Message: %s, Error StatusCode:%s,Error Stack:%s', err.name, err.message, err.statusCode, err.stack);
                    res.status(err.statusCode).json({ message: err.name + ' ' + err.message, statusCode: err.statusCode });
                    res.end();
                    break;
                default:
                    _logger2.default.error('Error Name: %s, Error Message: %s, Error StatusCode:%s,Error Stack:%s', err.name, err.message, err.statusCode, err.stack);
                    res.status(err.statusCode).json({ message: err.name + ' ' + err.message, statusCode: err.statusCode });
                    res.end();
                    break;
            }
        }

        next();
    });
}

function startServer(app) {
    var server = _http2.default.createServer(app);

    // server.listen(config.settings.workerPort, config.settings.hostName, config.settings.queueLength, function () {
    //     console.log('listening at http://%s:%s', config.settings.hostName, config.settings.workerPort);
    // });

    server.listen(_config2.default.settings.workerPort, function () {
        console.log('Basket Api Server for DIMusic @nithya.io Started with the port:%s, Environment: %s', _config2.default.settings.workerPort, _config2.default.settings.environment);
    });
}

configureApplication(app);
