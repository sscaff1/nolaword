'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var links = [{ label: 'News', link: '/' }, { label: 'Sports', link: '/sports' }, { label: 'Weather', link: '/weather' }];

function Menu(_ref) {
  var url = _ref.url;

  return _react2.default.createElement('div', { className: 'wrap', 'data-jsx': 434574691
  }, _react2.default.createElement('h2', { className: 'header', 'data-jsx': 434574691
  }, 'All articles below mention New Orleans'), _react2.default.createElement('h4', { className: 'header', 'data-jsx': 434574691
  }, 'Help support this site by visiting our ads!'), _react2.default.createElement('div', { className: 'linkContainer', 'data-jsx': 434574691
  }, links.map(function (link, i) {
    return _react2.default.createElement(_link2.default, { key: 'menulink-' + i, href: link.link }, _react2.default.createElement('a', { className: url.pathname === link.link && 'active', 'data-jsx': 434574691
    }, link.label));
  })), _react2.default.createElement(_style2.default, {
    styleId: 434574691,
    css: 'h3[data-jsx="434574691"],a[data-jsx="434574691"] {font-family: \'Open Sans\';}a[data-jsx="434574691"] {color: black;text-decoration: none;-webkit-transition: all 0.2s;-moz-transition: all 0.2s;-ms-transition: all 0.2s;transition: all 0.2s;}a[data-jsx="434574691"]:hover {-webkit-transform: scale(1.2);-moz-transform: scale(1.2);-ms-transform: scale(1.2);transform: scale(1.2);}.wrap[data-jsx="434574691"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;}.linkContainer[data-jsx="434574691"] {display:-webkit-flex; display:flex;align-items: center;justify-content: space-between;width: 200px;padding: 10px 30px;border-radius: 10px;border: 1px solid #000;margin-top: 20px;}.active[data-jsx="434574691"] {color: #D2B887;}.header[data-jsx="434574691"] {margin: 0;text-align: center;}'
  }));
}