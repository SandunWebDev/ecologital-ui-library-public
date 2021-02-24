'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function HelloWorld() {
  return /*#__PURE__*/React__default['default'].createElement("h1", null, "Hello World5");
}

function HelloWorld2() {
  return /*#__PURE__*/React__default['default'].createElement("h1", {
    style: {
      color: 'red'
    }
  }, "Hello World5");
}

var index = {
  HelloWorld: HelloWorld,
  HelloWorld2: HelloWorld2
};

module.exports = index;
