'use strict';

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('../logging/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	validateIdentity: function validateIdentity(req, callback) {
		_logger2.default.info('Indentity  Check Started');
		if (req.url == '/health') {
			callback(true);
		} else if (req.headers['x-auth-header'] == _config2.default.settings.secId) {
			_logger2.default.info('Header is valid, Authenticated');
			callback(true);
		} else {
			_logger2.default.info('Header is Invalid, Not Authenticated');
			callback(false);
		}
	}
};
