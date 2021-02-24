import React from 'react';

function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello World5");
}

function HelloWorld2() {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'red'
    }
  }, "Hello World5");
}

export { HelloWorld, HelloWorld2 };
