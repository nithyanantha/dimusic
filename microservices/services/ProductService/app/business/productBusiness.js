'use strict';

var _dbClient = require('../services/dbClient');

var _dbClient2 = _interopRequireDefault(_dbClient);

var _logger = require('../common/logging/logger.js');

var _logger2 = _interopRequireDefault(_logger);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

var _error = require('../common/errors/error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	getAllProducts: function getAllProducts(message, done) {
		getAllProductsFromDB(message, function (err, result) {
			if (err) {
				callback(err);
			} else {
				done(null, result);
			}
		});
	}
};

function getAllProductsFromDB(message, callback) {
	try {

		_dbClient2.default.getAllProducts(message, function (err, data) {
			var retry = 0;
			if (err) {
				_logger2.default.info("Error Received from DB service layer to business");

				var eObject = new Error('UnKnown Error');
				throw eObject;
			} else {
				_logger2.default.info("Products Successfully received from DB service");

				_logger2.default.info("data:" + JSON.stringify(data));
				callback(null, data);
			}
		});
	} catch (ex) {
		_logger2.default.info('Un Handleded Exception Occurs');
		callback(ex);
	}
}
