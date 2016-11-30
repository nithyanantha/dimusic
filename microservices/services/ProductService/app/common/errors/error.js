"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorBase = function (_Error) {
  _inherits(ErrorBase, _Error);

  function ErrorBase(name, statusCode, message) {
    _classCallCheck(this, ErrorBase);

    var _this = _possibleConstructorReturn(this, (ErrorBase.__proto__ || Object.getPrototypeOf(ErrorBase)).call(this));

    _this.name = name;
    _this.stack = new Error().stack;
    if (statusCode == undefined || null) {
      _this.statusCode = 500;
    } else {
      _this.statusCode = statusCode;
    }

    if (message == undefined || null) {
      _this.message = '';
    } else {
      _this.message = ': ' + message;
    }

    return _this;
  }

  return ErrorBase;
}(Error);

module.exports = function (_ErrorBase) {
  _inherits(ErrorMessage, _ErrorBase);

  function ErrorMessage(n, s, m) {
    _classCallCheck(this, ErrorMessage);

    return _possibleConstructorReturn(this, (ErrorMessage.__proto__ || Object.getPrototypeOf(ErrorMessage)).call(this, n, s, m));
  }

  return ErrorMessage;
}(ErrorBase);
