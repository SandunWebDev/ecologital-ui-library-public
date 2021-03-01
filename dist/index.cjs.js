'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var antd = require('antd');
var icons = require('@ant-design/icons');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function HelloWorld() {
  return /*#__PURE__*/React__default['default'].createElement("h1", null, "Hello World8");
}

function HelloWorld2() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$text = props.text,
      text = _props$text === void 0 ? 'Hello World' : _props$text;
  return /*#__PURE__*/React__default['default'].createElement("h1", {
    style: {
      color: 'purple'
    },
    className: "HelloWorld2"
  }, text);
}

antd.Menu.SubMenu;
var userMenu = /*#__PURE__*/React__default['default'].createElement("div", {
  className: "UserMenu"
}, /*#__PURE__*/React__default['default'].createElement("div", {
  className: "UserMenu__backgroundPhoto"
}, /*#__PURE__*/React__default['default'].createElement(icons.UserOutlined, null)), /*#__PURE__*/React__default['default'].createElement("div", {
  className: "UserMenu__top"
}, /*#__PURE__*/React__default['default'].createElement(antd.Avatar, null, "JD"), /*#__PURE__*/React__default['default'].createElement("div", {
  className: "UserMenu__top__details"
}, /*#__PURE__*/React__default['default'].createElement("div", {
  className: "UserMenu__top__details__title"
}, "John Doe"), /*#__PURE__*/React__default['default'].createElement("div", {
  className: "UserMenu__top__details__subTitle"
}, "Web Developer"))), /*#__PURE__*/React__default['default'].createElement(antd.Menu, null, /*#__PURE__*/React__default['default'].createElement(antd.Menu.Item, {
  icon: /*#__PURE__*/React__default['default'].createElement(icons.ProfileOutlined, null)
}, "User Profile"), /*#__PURE__*/React__default['default'].createElement(antd.Menu.Item, {
  icon: /*#__PURE__*/React__default['default'].createElement(icons.LoginOutlined, null)
}, "Log Out")));
var settingsMenu = /*#__PURE__*/React__default['default'].createElement("div", {
  className: "UserMenu"
}, /*#__PURE__*/React__default['default'].createElement("div", {
  className: "UserMenu__backgroundPhoto"
}, /*#__PURE__*/React__default['default'].createElement(icons.SettingOutlined, null)), /*#__PURE__*/React__default['default'].createElement(antd.Menu, null, /*#__PURE__*/React__default['default'].createElement(antd.Menu.Item, {
  icon: /*#__PURE__*/React__default['default'].createElement(icons.ProfileOutlined, null)
}, "Account Settings"), /*#__PURE__*/React__default['default'].createElement(antd.Menu.Item, {
  icon: /*#__PURE__*/React__default['default'].createElement(icons.BuildOutlined, null)
}, "Organization Settings")));
var messageMenu = /*#__PURE__*/React__default['default'].createElement("div", {
  className: "MessageMenu"
}, /*#__PURE__*/React__default['default'].createElement("div", {
  className: "UserMenu__backgroundPhoto"
}, /*#__PURE__*/React__default['default'].createElement(icons.SettingOutlined, null)), /*#__PURE__*/React__default['default'].createElement(antd.List, {
  size: "small",
  itemLayout: "horizontal",
  dataSource: [{
    avatar: 'AB',
    title: 'New Company Added',
    subtitle: 'PizzaHut'
  }, {
    avatar: 'CD',
    title: 'New Company Added',
    subtitle: 'KFC'
  }],
  renderItem: function renderItem(item) {
    return /*#__PURE__*/React__default['default'].createElement(antd.List.Item, null, /*#__PURE__*/React__default['default'].createElement(antd.List.Item.Meta, {
      avatar: /*#__PURE__*/React__default['default'].createElement(antd.Avatar, null, item.avatar),
      title: /*#__PURE__*/React__default['default'].createElement("a", {
        href: "https://ant.design"
      }, item.title),
      description: item.subtitle
    }));
  }
}));

function Menu2() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  props.text;
      var _props$pageTitle = props.pageTitle,
      pageTitle = _props$pageTitle === void 0 ? 'ECOLOGITAL' : _props$pageTitle;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "Menu"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "Menu____left"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "Menu__mobileMenu"
  }, /*#__PURE__*/React__default['default'].createElement(icons.MenuOutlined, null)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "Menu__title"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "Menu__title__logo"
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    src: "https://users.neurolage.com/inc/img/witmeg.png",
    alt: "company-logo"
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "Menu__title__text"
  }, pageTitle))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "Menu____right"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "Menu__search"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Input, {
    size: "large",
    placeholder: "Search",
    prefix: /*#__PURE__*/React__default['default'].createElement(icons.SearchOutlined, null)
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "Menu__badge"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Dropdown, {
    overlay: messageMenu,
    trigger: ['click']
  }, /*#__PURE__*/React__default['default'].createElement(antd.Badge, {
    count: 5,
    className: "aaa",
    size: "large"
  }, /*#__PURE__*/React__default['default'].createElement(icons.MessageOutlined, null)))), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(antd.Dropdown, {
    overlay: settingsMenu,
    trigger: ['click']
  }, /*#__PURE__*/React__default['default'].createElement(icons.SettingOutlined, null))), /*#__PURE__*/React__default['default'].createElement(antd.Dropdown, {
    overlay: userMenu,
    trigger: ['click']
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "Menu__avatar"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Avatar, null, "JD")))));
}

exports.HelloWorld = HelloWorld;
exports.HelloWorld2 = HelloWorld2;
exports.Menu = Menu2;
