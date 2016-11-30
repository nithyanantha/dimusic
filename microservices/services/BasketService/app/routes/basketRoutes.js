'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _basketBusiness = require('../business/basketBusiness');

var _basketBusiness2 = _interopRequireDefault(_basketBusiness);

var _logger = require('../common/logging/logger');

var _logger2 = _interopRequireDefault(_logger);

var _cors = require('../common/security/cors');

var _cors2 = _interopRequireDefault(_cors);

var _cors3 = require('cors');

var _cors4 = _interopRequireDefault(_cors3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var corsOptions = null;
_cors2.default.getOptions(function (options) {
	corsOptions = options;
});

router.options('/', (0, _cors4.default)(corsOptions));

router.get('/', (0, _cors4.default)(corsOptions), function (req, res, next) {
	res.send('welcome to Basket Api');
});

router.get('/health', function (req, res, next) {
	res.send('ok');
});

router.options('/basket', (0, _cors4.default)(corsOptions));

router.post('/basket', (0, _cors4.default)(corsOptions), function (req, res, next) {

	_logger2.default.info('Message Received in Route Layer');

	_basketBusiness2.default.addToBasket(req.body, function (err, data) {
		try {
			if (err) {
				_logger2.default.info('Error Name: %s, Error Message: %s, Error StatusCode:%s,Error Stack:%s', err.name, err.message, err.statusCode, err.stack);
				res.status(500).json({ message: err.name + ' ' + err.message, statusCode: err.statusCode });
				res.end();
			}
			if (data) {
				_logger2.default.info('Products has been Successfully added to the basket');
				res.send(data);
			}
		} catch (e) {
			res.status(500).send('Unhandled Exception');
		}
	});
});

module.exports = router;
