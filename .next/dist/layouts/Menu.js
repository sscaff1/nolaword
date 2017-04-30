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

  return _react2.default.createElement('div', { className: 'wrap', 'data-jsx': 37508774
  }, _react2.default.createElement('h2', { className: 'header', 'data-jsx': 37508774
  }, 'All articles below mention New Orleans'), _react2.default.createElement('h4', { className: 'header', 'data-jsx': 37508774
  }, 'Help support this site by visiting our ads!'), _react2.default.createElement('div', { className: 'linkContainer', 'data-jsx': 37508774
  }, links.map(function (link, i) {
    return _react2.default.createElement(_link2.default, { key: 'menulink-' + i, href: link.link }, _react2.default.createElement('a', { className: url.pathname === link.link && 'active', 'data-jsx': 37508774
    }, link.label));
  })), _react2.default.createElement(_style2.default, {
    styleId: 37508774,
    css: 'h3[data-jsx="37508774"],a[data-jsx="37508774"] {font-family: \'Open Sans\';}a[data-jsx="37508774"] {color: black;text-decoration: none;-webkit-transition: all 0.2s;-moz-transition: all 0.2s;-ms-transition: all 0.2s;transition: all 0.2s;}@media (min-width: 500px) {a[data-jsx="37508774"]:hover {-webkit-transform: scale(1.2);-moz-transform: scale(1.2);-ms-transform: scale(1.2);transform: scale(1.2);}}.wrap[data-jsx="37508774"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;}.linkContainer[data-jsx="37508774"] {display:-webkit-flex; display:flex;align-items: center;justify-content: space-between;width: 200px;padding: 10px 30px;border-radius: 10px;border: 1px solid #000;margin-top: 20px;}.active[data-jsx="37508774"] {color: #D2B887;}.header[data-jsx="37508774"] {margin: 0;text-align: center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtCLEFBQ0QsZ0RBQ29CLHlCQUMxQixDQUNFLHdCQUNZLGFBQ1Msc0JBQ0QscUdBQ3RCLENBQzBCLDJCQUNoQiw4QkFDZSx5R0FDdkIsQ0FDRixDQUNNLDRCQUNTLG1DQUNTLGtGQUNILG9CQUNyQixDQUNlLHFDQUNBLG1DQUNNLG9CQUNXLCtCQUNsQixhQUNNLG1CQUNDLG9CQUNHLHVCQUNOLGlCQUNsQixDQUNRLDhCQUNRLGVBQ2hCLENBQ1EsOEJBQ0csVUFDUyxtQkFDcEIiLCJmaWxlIjoibGF5b3V0cy9NZW51LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGV2ZW4vRG9jdW1lbnRzL1NpdGVzL25vbGF3b3JkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgbGFiZWw6ICdOZXdzJywgbGluazogJy8nIH0sXG4gIHsgbGFiZWw6ICdTcG9ydHMnLCBsaW5rOiAnL3Nwb3J0cycgfSxcbiAgeyBsYWJlbDogJ1dlYXRoZXInLCBsaW5rOiAnL3dlYXRoZXInIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KHsgdXJsIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXJcIj5BbGwgYXJ0aWNsZXMgYmVsb3cgbWVudGlvbiBOZXcgT3JsZWFuczwvaDI+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyXCI+SGVscCBzdXBwb3J0IHRoaXMgc2l0ZSBieSB2aXNpdGluZyBvdXIgYWRzITwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtDb250YWluZXJcIj5cbiAgICAgICAge2xpbmtzLm1hcCgobGluaywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2BtZW51bGluay0ke2l9YH0gaHJlZj17bGluay5saW5rfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXt1cmwucGF0aG5hbWUgPT09IGxpbmsubGluayAmJiAnYWN0aXZlJ30+XG4gICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgzLCBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAud3JhcCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rQ29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRDJCODg3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=layouts/Menu.js */'
  }));
}