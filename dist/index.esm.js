import React from 'react';
import { Button } from 'antd';

function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello World8");
}

function HelloWorld2() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$text = props.text,
      text = _props$text === void 0 ? 'Hello World' : _props$text;
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'red'
    },
    className: "HelloWorld2"
  }, text);
}

function Menu() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  props.text;
  return /*#__PURE__*/React.createElement("div", null, "ANTD", /*#__PURE__*/React.createElement(Button, {
    type: "primary"
  }, "Primary Button"));
}

export { HelloWorld, HelloWorld2, Menu };
