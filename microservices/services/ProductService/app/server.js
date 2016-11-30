"use strict";

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('./common/logging/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_config2.default.settings.clusterEnabled === 1) {
    require('cluster-service').start({
        workers: './config/app.js',
        accessKey: _config2.default.settings.clusterAccessKey,
        port: _config2.default.settings.masterPort
    });
    _logger2.default.info('started as a cluster mode');
} else {

    _logger2.default.info('started as a standalone server');

    require('./config/app.js');
}
