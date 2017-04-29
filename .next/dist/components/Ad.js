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

var _jsxFileName = "/Users/steven/Documents/Sites/nolaword/components/Ad.js";
function Article(_ref) {
  var image = _ref.image,
      url = _ref.url,
      snippet = _ref.snippet,
      headline = _ref.headline,
      pixel = _ref.pixel,
      price = _ref.price;

  return _react2.default.createElement("a", { href: url, target: "_blank", className: "container", "data-jsx": 1981674697,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("h3", {
    "data-jsx": 1981674697,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, headline), image && _react2.default.createElement("img", { src: image, "data-jsx": 1981674697,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement("p", { className: "snippet", "data-jsx": 1981674697,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, snippet), _react2.default.createElement("p", { className: "price", "data-jsx": 1981674697,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, price), pixel && _react2.default.createElement("img", { src: pixel, width: "1", height: "1", alt: "", className: "pixel", "data-jsx": 1981674697,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 1981674697,
    css: "h3[data-jsx=\"1981674697\"],p[data-jsx=\"1981674697\"] {font-family: 'Open Sans';}a[data-jsx=\"1981674697\"] {color: black;text-decoration: none;-webkit-transition: all 0.2s;-moz-transition: all 0.2s;-ms-transition: all 0.2s;transition: all 0.2s;border: 1px solid #000;border-radius: 5px;margin-bottom: 10px;padding: 0 5px;background: #D2B887;}a[data-jsx=\"1981674697\"]:hover {-webkit-transform: scale(1.05);-moz-transform: scale(1.05);-ms-transform: scale(1.05);transform: scale(1.05);}.container[data-jsx=\"1981674697\"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;width: 30%;text-align: center;}@media (max-width: 500px) {.container[data-jsx=\"1981674697\"] {width: 45%;}}.pixel[data-jsx=\"1981674697\"] {border:none !important;margin:0px !important;width: 1px;height: 1px;}.snippet[data-jsx=\"1981674697\"] {font-size: 12px;margin: 5px 0 0 0;}.price[data-jsx=\"1981674697\"] {margin: 5px 0 0 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWtCLEFBQ0Qsb0RBQ29CLHlCQUMxQixDQUNFLDBCQUNZLGFBQ1Msc0JBQ0QscUdBQ0UsdUJBQ0osbUJBQ0Msb0JBQ0wsZUFDSyxvQkFDckIsQ0FDUSxnQ0FDZ0IsNkdBQ3hCLENBQ1csbUNBQ0ksbUNBQ1Msa0ZBQ0gsb0JBQ1QsV0FDUSxtQkFDcEIsQ0FDMkIsMkJBQ2IsbUNBQ0MsV0FDWixDQUNGLENBQ08sK0JBQ2lCLHVCQUNELHNCQUNYLFdBQ0MsWUFDYixDQUNTLGlDQUNRLGdCQUNFLGtCQUNuQixDQUNPLCtCQUNZLGtCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL0FkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGV2ZW4vRG9jdW1lbnRzL1NpdGVzL25vbGF3b3JkIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aWNsZSh7IGltYWdlLCB1cmwsIHNuaXBwZXQsIGhlYWRsaW5lLCBwaXhlbCwgcHJpY2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDM+e2hlYWRsaW5lfTwvaDM+XG4gICAgICB7aW1hZ2UgJiYgKFxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICApfVxuICAgICAgPHAgY2xhc3NOYW1lPVwic25pcHBldFwiPntzbmlwcGV0fTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+e3ByaWNlfTwvcD5cbiAgICAgIHtwaXhlbCAmJiAoXG4gICAgICAgIDxpbWcgc3JjPXtwaXhlbH0gd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiIGFsdD1cIlwiIGNsYXNzTmFtZT1cInBpeGVsXCIgLz5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDMsIHAge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNEMkI4ODc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgICAucGl4ZWwge1xuICAgICAgICAgICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgbWFyZ2luOjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLnNuaXBwZXQge1xuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICBtYXJnaW46IDVweCAwIDAgMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvYT5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=components/Ad.js */"
  }));
}