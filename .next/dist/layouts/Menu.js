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

var _jsxFileName = '/Users/steven/Documents/Sites/nolaword/layouts/Menu.js';


var links = [{ label: 'News', link: '/' }, { label: 'Sports', link: '/sports' }, { label: 'Weather', link: '/weather' }];

function Menu(_ref) {
  var url = _ref.url;

  return _react2.default.createElement('div', { className: 'wrap', 'data-jsx': 434574691,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('h2', { className: 'header', 'data-jsx': 434574691,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'All articles below mention New Orleans'), _react2.default.createElement('h4', { className: 'header', 'data-jsx': 434574691,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Help support this site by visiting our ads!'), _react2.default.createElement('div', { className: 'linkContainer', 'data-jsx': 434574691,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, links.map(function (link, i) {
    return _react2.default.createElement(_link2.default, { key: 'menulink-' + i, href: link.link, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, _react2.default.createElement('a', { className: url.pathname === link.link && 'active', 'data-jsx': 434574691,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, link.label));
  })), _react2.default.createElement(_style2.default, {
    styleId: 434574691,
    css: 'h3[data-jsx="434574691"],a[data-jsx="434574691"] {font-family: \'Open Sans\';}a[data-jsx="434574691"] {color: black;text-decoration: none;-webkit-transition: all 0.2s;-moz-transition: all 0.2s;-ms-transition: all 0.2s;transition: all 0.2s;}a[data-jsx="434574691"]:hover {-webkit-transform: scale(1.2);-moz-transform: scale(1.2);-ms-transform: scale(1.2);transform: scale(1.2);}.wrap[data-jsx="434574691"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;}.linkContainer[data-jsx="434574691"] {display:-webkit-flex; display:flex;align-items: center;justify-content: space-between;width: 200px;padding: 10px 30px;border-radius: 10px;border: 1px solid #000;margin-top: 20px;}.active[data-jsx="434574691"] {color: #D2B887;}.header[data-jsx="434574691"] {margin: 0;text-align: center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtCLEFBQ0Qsa0RBQ29CLHlCQUMxQixDQUNFLHlCQUNZLGFBQ1Msc0JBQ0QscUdBQ3RCLENBQ1EsK0JBQ2UseUdBQ3ZCLENBQ00sNkJBQ1MsbUNBQ1Msa0ZBQ0gsb0JBQ3JCLENBQ2Usc0NBQ0EsbUNBQ00sb0JBQ1csK0JBQ2xCLGFBQ00sbUJBQ0Msb0JBQ0csdUJBQ04saUJBQ2xCLENBQ1EsK0JBQ1EsZUFDaEIsQ0FDUSwrQkFDRyxVQUNTLG1CQUNwQiIsImZpbGUiOiJsYXlvdXRzL01lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZXZlbi9Eb2N1bWVudHMvU2l0ZXMvbm9sYXdvcmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBsYWJlbDogJ05ld3MnLCBsaW5rOiAnLycgfSxcbiAgeyBsYWJlbDogJ1Nwb3J0cycsIGxpbms6ICcvc3BvcnRzJyB9LFxuICB7IGxhYmVsOiAnV2VhdGhlcicsIGxpbms6ICcvd2VhdGhlcicgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoeyB1cmwgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlclwiPkFsbCBhcnRpY2xlcyBiZWxvdyBtZW50aW9uIE5ldyBPcmxlYW5zPC9oMj5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXJcIj5IZWxwIHN1cHBvcnQgdGhpcyBzaXRlIGJ5IHZpc2l0aW5nIG91ciBhZHMhPC9oND5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua0NvbnRhaW5lclwiPlxuICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rIGtleT17YG1lbnVsaW5rLSR7aX1gfSBocmVmPXtsaW5rLmxpbmt9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3VybC5wYXRobmFtZSA9PT0gbGluay5saW5rICYmICdhY3RpdmUnfT5cbiAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDMsIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndyYXAge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua0NvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogI0QyQjg4NztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=layouts/Menu.js */'
  }));
}