'use strict';

var _logger = require('../common/logging/logger.js');

var _logger2 = _interopRequireDefault(_logger);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

	addToBasket: function addToBasket(message, callback) {
		_logger2.default.info('Processing DB Requests for Getting All Products call');

		//Hard Coded Values

		var product = message.productName;

		var SuccessMessage = { message: "Product : *****" + product + "******  successfully added to the basket" };

		callback(null, SuccessMessage);
	}
};
