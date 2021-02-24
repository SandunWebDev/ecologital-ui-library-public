'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var antd = require('antd');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function HelloWorld() {
  return /*#__PURE__*/React__default['default'].createElement("h1", null, "Hello World5");
}

function HelloWorld2() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$text = props.text,
      text = _props$text === void 0 ? 'Hello World' : _props$text;
  return /*#__PURE__*/React__default['default'].createElement("h1", {
    style: {
      color: 'red'
    },
    className: "HelloWorld2"
  }, text);
}

function Menu() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  props.text;
  return /*#__PURE__*/React__default['default'].createElement("div", null, "ANTD", /*#__PURE__*/React__default['default'].createElement(antd.Button, {
    type: "primary"
  }, "Primary Button"));
}

exports.HelloWorld = HelloWorld;
exports.HelloWorld2 = HelloWorld2;
exports.Menu = Menu;
