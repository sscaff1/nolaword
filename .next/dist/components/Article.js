"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Article;

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseImagePath = 'https://www.nytimes.com/';

function Article(_ref) {
  var image = _ref.image,
      url = _ref.url,
      snippet = _ref.snippet,
      headline = _ref.headline;

  return _react2.default.createElement("a", { href: url, target: "_blank", className: "container", "data-jsx": 1562538310
  }, _react2.default.createElement("h3", {
    "data-jsx": 1562538310
  }, headline), image && _react2.default.createElement("img", { src: baseImagePath + image.url, className: "image", style: { height: image.height, width: image.width }, "data-jsx": 1562538310
  }), _react2.default.createElement("p", {
    "data-jsx": 1562538310
  }, snippet), _react2.default.createElement(_style2.default, {
    styleId: 1562538310,
    css: "h3[data-jsx=\"1562538310\"],p[data-jsx=\"1562538310\"] {font-family: 'Open Sans';}a[data-jsx=\"1562538310\"] {color: black;text-decoration: none;-webkit-transition: all 0.2s;-moz-transition: all 0.2s;-ms-transition: all 0.2s;transition: all 0.2s;border: 1px solid #000;border-radius: 5px;margin-bottom: 10px;padding: 0 5px;}a[data-jsx=\"1562538310\"]:hover {-webkit-transform: scale(1.05);-moz-transform: scale(1.05);-ms-transform: scale(1.05);transform: scale(1.05);}.container[data-jsx=\"1562538310\"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;width: 30%;text-align: center;}@media (max-width: 500px) {.container[data-jsx=\"1562538310\"] {width: 45%;}}"
  }));
}