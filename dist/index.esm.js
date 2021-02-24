import React from 'react';
import 'antd';

function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello World5");
}

function HelloWorld2$1() {
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

HelloWorld2;

export { HelloWorld, HelloWorld2$1 as HelloWorld2 };
