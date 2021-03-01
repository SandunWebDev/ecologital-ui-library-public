import React from 'react';
import { Menu, Avatar, Input, Dropdown, Badge, List } from 'antd';
import { UserOutlined, ProfileOutlined, LoginOutlined, SettingOutlined, BuildOutlined, MenuOutlined, SearchOutlined, MessageOutlined } from '@ant-design/icons';

function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello World8");
}

function HelloWorld2() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$text = props.text,
      text = _props$text === void 0 ? 'Hello World' : _props$text;
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'yellow'
    },
    className: "HelloWorld2"
  }, text);
}

Menu.SubMenu;
var userMenu = /*#__PURE__*/React.createElement("div", {
  className: "UserMenu"
}, /*#__PURE__*/React.createElement("div", {
  className: "UserMenu__backgroundPhoto"
}, /*#__PURE__*/React.createElement(UserOutlined, null)), /*#__PURE__*/React.createElement("div", {
  className: "UserMenu__top"
}, /*#__PURE__*/React.createElement(Avatar, null, "JD"), /*#__PURE__*/React.createElement("div", {
  className: "UserMenu__top__details"
}, /*#__PURE__*/React.createElement("div", {
  className: "UserMenu__top__details__title"
}, "John Doe"), /*#__PURE__*/React.createElement("div", {
  className: "UserMenu__top__details__subTitle"
}, "Web Developer"))), /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(Menu.Item, {
  icon: /*#__PURE__*/React.createElement(ProfileOutlined, null)
}, "User Profile"), /*#__PURE__*/React.createElement(Menu.Item, {
  icon: /*#__PURE__*/React.createElement(LoginOutlined, null)
}, "Log Out")));
var settingsMenu = /*#__PURE__*/React.createElement("div", {
  className: "UserMenu"
}, /*#__PURE__*/React.createElement("div", {
  className: "UserMenu__backgroundPhoto"
}, /*#__PURE__*/React.createElement(SettingOutlined, null)), /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(Menu.Item, {
  icon: /*#__PURE__*/React.createElement(ProfileOutlined, null)
}, "Account Settings"), /*#__PURE__*/React.createElement(Menu.Item, {
  icon: /*#__PURE__*/React.createElement(BuildOutlined, null)
}, "Organization Settings")));
var messageMenu = /*#__PURE__*/React.createElement("div", {
  className: "MessageMenu"
}, /*#__PURE__*/React.createElement("div", {
  className: "UserMenu__backgroundPhoto"
}, /*#__PURE__*/React.createElement(SettingOutlined, null)), /*#__PURE__*/React.createElement(List, {
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
    return /*#__PURE__*/React.createElement(List.Item, null, /*#__PURE__*/React.createElement(List.Item.Meta, {
      avatar: /*#__PURE__*/React.createElement(Avatar, null, item.avatar),
      title: /*#__PURE__*/React.createElement("a", {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "Menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Menu____left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Menu__mobileMenu"
  }, /*#__PURE__*/React.createElement(MenuOutlined, null)), /*#__PURE__*/React.createElement("div", {
    className: "Menu__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "Menu__title__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://users.neurolage.com/inc/img/witmeg.png",
    alt: "company-logo"
  })), /*#__PURE__*/React.createElement("span", {
    className: "Menu__title__text"
  }, pageTitle))), /*#__PURE__*/React.createElement("div", {
    className: "Menu____right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Menu__search"
  }, /*#__PURE__*/React.createElement(Input, {
    size: "large",
    placeholder: "Search",
    prefix: /*#__PURE__*/React.createElement(SearchOutlined, null)
  })), /*#__PURE__*/React.createElement("div", {
    className: "Menu__badge"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    overlay: messageMenu,
    trigger: ['click']
  }, /*#__PURE__*/React.createElement(Badge, {
    count: 5,
    className: "aaa",
    size: "large"
  }, /*#__PURE__*/React.createElement(MessageOutlined, null)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    overlay: settingsMenu,
    trigger: ['click']
  }, /*#__PURE__*/React.createElement(SettingOutlined, null))), /*#__PURE__*/React.createElement(Dropdown, {
    overlay: userMenu,
    trigger: ['click']
  }, /*#__PURE__*/React.createElement("div", {
    className: "Menu__avatar"
  }, /*#__PURE__*/React.createElement(Avatar, null, "JD")))));
}

export { HelloWorld, HelloWorld2, Menu2 as Menu };
