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

var _jsxFileName = "/Users/steven/Documents/Sites/nolaword/components/Article.js";

var baseImagePath = 'https://www.nytimes.com/';

function Article(_ref) {
  var image = _ref.image,
      url = _ref.url,
      snippet = _ref.snippet,
      headline = _ref.headline;

  return _react2.default.createElement("a", { href: url, target: "_blank", className: "container", "data-jsx": 1562538310,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("h3", {
    "data-jsx": 1562538310,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, headline), image && _react2.default.createElement("img", { src: baseImagePath + image.url, className: "image", style: { height: image.height, width: image.width }, "data-jsx": 1562538310,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement("p", {
    "data-jsx": 1562538310,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, snippet), _react2.default.createElement(_style2.default, {
    styleId: 1562538310,
    css: "h3[data-jsx=\"1562538310\"],p[data-jsx=\"1562538310\"] {font-family: 'Open Sans';}a[data-jsx=\"1562538310\"] {color: black;text-decoration: none;-webkit-transition: all 0.2s;-moz-transition: all 0.2s;-ms-transition: all 0.2s;transition: all 0.2s;border: 1px solid #000;border-radius: 5px;margin-bottom: 10px;padding: 0 5px;}a[data-jsx=\"1562538310\"]:hover {-webkit-transform: scale(1.05);-moz-transform: scale(1.05);-ms-transform: scale(1.05);transform: scale(1.05);}.container[data-jsx=\"1562538310\"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;width: 30%;text-align: center;}@media (max-width: 500px) {.container[data-jsx=\"1562538310\"] {width: 45%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVa0IsQUFDRCxvREFDb0IseUJBQzFCLENBQ0UsMEJBQ1ksYUFDUyxzQkFDRCxxR0FDRSx1QkFDSixtQkFDQyxvQkFDTCxlQUNoQixDQUNRLGdDQUNnQiw2R0FDeEIsQ0FDVyxtQ0FDSSxtQ0FDUyxrRkFDSCxvQkFDVCxXQUNRLG1CQUNwQixDQUMyQiwyQkFDYixtQ0FDQyxXQUNaLENBQ0YiLCJmaWxlIjoiY29tcG9uZW50cy9BcnRpY2xlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGV2ZW4vRG9jdW1lbnRzL1NpdGVzL25vbGF3b3JkIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFzZUltYWdlUGF0aCA9ICdodHRwczovL3d3dy5ueXRpbWVzLmNvbS8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlKHsgaW1hZ2UsIHVybCwgc25pcHBldCwgaGVhZGxpbmUgfSkge1xuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDM+e2hlYWRsaW5lfTwvaDM+XG4gICAgICB7aW1hZ2UgJiYgKFxuICAgICAgICA8aW1nIHNyYz17YmFzZUltYWdlUGF0aCArIGltYWdlLnVybH0gY2xhc3NOYW1lPVwiaW1hZ2VcIiBzdHlsZT17eyBoZWlnaHQ6IGltYWdlLmhlaWdodCwgd2lkdGg6IGltYWdlLndpZHRoIH19IC8+XG4gICAgICApfVxuICAgICAgPHA+e3NuaXBwZXR9PC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgzLCBwIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2E+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=components/Article.js */"
  }));
}