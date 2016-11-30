'use strict';

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

	getOptions: function getOptions(callback) {
		var whitelist = _config2.default.settings.corsWhitelist;
		var corsOptions = {
			origin: function origin(_origin, callback) {
				var originIsWhitelisted = whitelist.indexOf(_origin) !== -1;
				callback(null, originIsWhitelisted);
			}
		};
		callback(corsOptions);
	}

};
