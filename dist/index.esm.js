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

var index = {
  HelloWorld: HelloWorld,
  HelloWorld2: HelloWorld2
};

export default index;
