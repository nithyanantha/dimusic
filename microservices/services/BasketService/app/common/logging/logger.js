"use strict";

var _bunyan = require('bunyan');

var _bunyan2 = _interopRequireDefault(_bunyan);

var _bunyanFormat = require('bunyan-format');

var _bunyanFormat2 = _interopRequireDefault(_bunyanFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatOut = (0, _bunyanFormat2.default)({
  outputMode: 'short'
});

var logger = _bunyan2.default.createLogger({
  name: 'Basket Api @nithya.io',
  serializers: _bunyan2.default.stdSerializers,

  //******** Uncomment this below streams section for the info log / file logger format
  streams: [{
    level: 'info',
    stream: formatOut
  }
  // ,
  // {
  //     name:'debuglogs',
  //     level: 'debug',
  //     path: './logs/debug.log' // log ERROR and above to a file
  // },
  //  {
  //     name:'errorlogs',
  //     level: 'error',
  //     path: './logs/error.log' // log ERROR and above to a file
  // }
  ]

});

module.exports = logger;
