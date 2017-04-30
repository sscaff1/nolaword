webpackHotUpdate(5,{

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = __webpack_require__(561);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _layouts = __webpack_require__(573);

var _components = __webpack_require__(569);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = __webpack_require__(562);


var NEWS_DESK = 'weather';
var BASE_IMAGE = 'http://openweathermap.org/img/w/';

function degToDirection(degree) {
  var val = Math.round(degree / 22.55 + 0.5, 0);
  var directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return directions[val % 16];
}

var Weather = function (_Component) {
  (0, _inherits3.default)(Weather, _Component);

  function Weather() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Weather);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Weather.__proto__ || (0, _getPrototypeOf2.default)(Weather)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      zipCode: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Weather, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          weather = _props.weather;

      return _react2.default.createElement(_layouts.Layout, { url: url }, _react2.default.createElement('h2', {
        'data-jsx': 224118708
      }, 'Weather'), _react2.default.createElement('div', { className: 'container', 'data-jsx': 224118708
      }, _react2.default.createElement('div', { className: 'box', 'data-jsx': 224118708
      }, _react2.default.createElement('h3', { className: 'title', 'data-jsx': 224118708
      }, weather.name), _react2.default.createElement('img', { src: '' + BASE_IMAGE + weather.weather[0].icon + '.png', 'data-jsx': 224118708
      }), _react2.default.createElement('h5', { className: 'title', 'data-jsx': 224118708
      }, weather.weather[0].description), _react2.default.createElement('br', {
        'data-jsx': 224118708
      }), _react2.default.createElement('h4', { className: 'title', 'data-jsx': 224118708
      }, 'Temp: ', Math.round(weather.main.temp, 0), '\u2109'), _react2.default.createElement('h4', { className: 'title', 'data-jsx': 224118708
      }, 'Humidity: ', weather.main.humidity, '%'), _react2.default.createElement('h4', { className: 'title', 'data-jsx': 224118708
      }, 'Wind: ', weather.wind.speed, ' mph ', degToDirection(weather.wind.deg)))), _react2.default.createElement(_style2.default, {
        styleId: 224118708,
        css: '.container[data-jsx="224118708"] {display:-webkit-flex; display:flex;padding-left: 10px;justify-content: space-around;align-items: center;width: 100%;padding-bottom: 300px;}.box[data-jsx="224118708"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;justify-content: center;width: 40%;border: 1px solid #000;border-radius: 5px;-webkit-transition: all 0.2s;-moz-transition: all 0.2s;-ms-transition: all 0.2s;transition: all 0.2s;padding: 10px 0;}.box[data-jsx="224118708"]:hover {-webkit-transform: scale(1.2);-moz-transform: scale(1.2);-ms-transform: scale(1.2);transform: scale(1.2);}.title[data-jsx="224118708"] {margin: 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dlYXRoZXIuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENvQixBQUNFLGtDQUNJLG1DQUNLLG1CQUNXLDhCQUNWLG9CQUNSLFlBQ1Usc0JBQ3ZCLENBQ0ssNEJBQ1UsbUNBQ1Msa0ZBQ0gsb0JBQ0ksd0JBQ2IsV0FDWSx1QkFDSixtQkFDRSxxR0FDTCxnQkFDakIsQ0FDVyxrQ0FDWSx5R0FDdkIsQ0FDTyw4QkFDSSxVQUNYIiwiZmlsZSI6InBhZ2VzL3dlYXRoZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZXZlbi9Eb2N1bWVudHMvU2l0ZXMvbm9sYXdvcmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvY29uZmlnLmpzb24nKTtcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2xheW91dHMnO1xuaW1wb3J0IHsgQXJ0aWNsZSwgQWQsIG1ha2VSZXF1ZXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmNvbnN0IE5FV1NfREVTSyA9ICd3ZWF0aGVyJztcbmNvbnN0IEJBU0VfSU1BR0UgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8nO1xuXG5mdW5jdGlvbiBkZWdUb0RpcmVjdGlvbihkZWdyZWUpIHtcbiAgY29uc3QgdmFsID0gTWF0aC5yb3VuZCgoZGVncmVlIC8gMjIuNTUpICsgMC41LCAwKTtcbiAgY29uc3QgZGlyZWN0aW9ucyA9IFtcIk5cIixcIk5ORVwiLFwiTkVcIixcIkVORVwiLFwiRVwiLFwiRVNFXCIsIFwiU0VcIiwgXCJTU0VcIixcIlNcIixcIlNTV1wiLFwiU1dcIixcIldTV1wiLFwiV1wiLFwiV05XXCIsXCJOV1wiLFwiTk5XXCJdO1xuICByZXR1cm4gZGlyZWN0aW9uc1t2YWwgJSAxNl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB6aXBDb2RlOiAnJyxcbiAgfTtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSB9KSB7XG4gICAgY29uc3Qgb3JpZ2luID0gcmVxID8gYCR7cmVxLnByb3RvY29sfTovLyR7cmVxLmdldCgnSG9zdCcpfWAgOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKGAke29yaWdpbn0vYXBpL3dlYXRoZXJgKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdlYXRoZXIsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVybCwgd2VhdGhlciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB1cmw9e3VybH0+XG4gICAgICAgIDxoMj5XZWF0aGVyPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e3dlYXRoZXIubmFtZX08L2gzPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfSU1BR0V9JHt3ZWF0aGVyLndlYXRoZXJbMF0uaWNvbn0ucG5nYH0gLz5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt3ZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9oNT5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+VGVtcDoge01hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXAsIDApfSYjODQ1Nzs8L2g0PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+SHVtaWRpdHk6IHt3ZWF0aGVyLm1haW4uaHVtaWRpdHl9JTwvaDQ+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5XaW5kOiB7d2VhdGhlci53aW5kLnNwZWVkfSBtcGgge2RlZ1RvRGlyZWN0aW9uKHdlYXRoZXIud2luZC5kZWcpfTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm94OmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/weather.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref3) {
        var req = _ref3.req;
        var origin, weather;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                origin = req ? req.protocol + '://' + req.get('Host') : window.location.origin;
                _context.next = 3;
                return (0, _isomorphicUnfetch2.default)(origin + '/api/weather').then(function (response) {
                  return response.json();
                });

              case 3:
                weather = _context.sent;
                return _context.abrupt('return', {
                  weather: weather
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Weather;
}(_react.Component);

exports.default = Weather;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/steven/Documents/Sites/nolaword/pages/weather.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/steven/Documents/Sites/nolaword/pages/weather.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/weather")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93ZWF0aGVyLmpzP2E4ZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0I7Ozs7QUFDVDs7OztBQUVFOztBQUNhOzs7O0FBRnRCLElBQU0sU0FBUzs7O0FBSWYsSUFBTSxZQUFZO0FBQ2xCLElBQU0sYUFBYTs7QUFFbkIsU0FBUyxlQUFlLFFBQ3RCO01BQU0sTUFBTSxLQUFLLE1BQU8sU0FBUyxRQUFTLEtBQzFDO01BQU0sYUFBYSxDQUFDLEtBQUksT0FBTSxNQUFLLE9BQU0sS0FBSSxPQUFPLE1BQU0sT0FBTSxLQUFJLE9BQU0sTUFBSyxPQUFNLEtBQUksT0FBTSxNQUMvRjtTQUFPLFdBQVcsTUFDbkI7OztJQUVvQjs7Ozs7Ozs7Ozs7Ozs7OE1BQ25CO2VBQ1c7QUFBVDs7Ozs7NkJBV087bUJBQ2tCLEtBQUs7VUFBdEI7VUFBSyxpQkFDYjs7NkJBQ0csaUNBQU8sS0FDTjtvQkFBQTtBQUFBLFNBQ0EsbURBQUssV0FBVSx5QkFDYjt5QkFBQSx1QkFBSyxXQUFVLG1CQUNiO3lCQUFBLHNCQUFJLFdBQVUscUJBQVM7aUJBQ3ZCLDhDQUFLLFVBQVEsYUFBYSxRQUFRLFFBQVEsR0FBRyxPQUE3QyxvQkFDQTswQkFBQSxzQkFBSSxXQUFVLHFCQUFTO2lCQUFRLFFBQVEsR0FDdkM7b0JBQ0E7QUFEQSwwQkFDQSxzQkFBSSxXQUFVLHFCQUFkO1NBQTZCLGVBQUssTUFBTSxRQUFRLEtBQUssTUFBTSxJQUMzRCxpREFBSSxXQUFVLHFCQUFkO1NBQWlDLHNCQUFRLEtBQUssVUFDOUMsNENBQUksV0FBVSxxQkFBZDtTQUE2QixrQkFBUSxLQUFLLE9BQVksd0JBQWUsUUFBUSxLQUFLO2lCQVZ4RjthQTBDSDtBQTFDRzs7Ozs7O1lBWDRCOzs7OzttQkFDeEI7eUJBQVMsTUFBUyxJQUFJLG1CQUFjLElBQUksSUFBSSxVQUFZLE9BQU8sU0FBUzs7d0RBQy9DLHlCQUFzQixLQUFLO3lCQUFZLFNBQVM7QUFBekQ7O21CQUFoQjs7OzJCQUNDO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUK0I7O2tCQUFoQixRIiwiZmlsZSI6IjUuZWE2YThlNDJhYWVhY2ExNzI5ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jb25maWcuanNvbicpO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vbGF5b3V0cyc7XG5pbXBvcnQgeyBBcnRpY2xlLCBBZCwgbWFrZVJlcXVlc3QgfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuY29uc3QgTkVXU19ERVNLID0gJ3dlYXRoZXInO1xuY29uc3QgQkFTRV9JTUFHRSA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93Lyc7XG5cbmZ1bmN0aW9uIGRlZ1RvRGlyZWN0aW9uKGRlZ3JlZSkge1xuICBjb25zdCB2YWwgPSBNYXRoLnJvdW5kKChkZWdyZWUgLyAyMi41NSkgKyAwLjUsIDApO1xuICBjb25zdCBkaXJlY3Rpb25zID0gW1wiTlwiLFwiTk5FXCIsXCJORVwiLFwiRU5FXCIsXCJFXCIsXCJFU0VcIiwgXCJTRVwiLCBcIlNTRVwiLFwiU1wiLFwiU1NXXCIsXCJTV1wiLFwiV1NXXCIsXCJXXCIsXCJXTldcIixcIk5XXCIsXCJOTldcIl07XG4gIHJldHVybiBkaXJlY3Rpb25zW3ZhbCAlIDE2XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHppcENvZGU6ICcnLFxuICB9O1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcbiAgICBjb25zdCBvcmlnaW4gPSByZXEgPyBgJHtyZXEucHJvdG9jb2x9Oi8vJHtyZXEuZ2V0KCdIb3N0Jyl9YCA6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2goYCR7b3JpZ2lufS9hcGkvd2VhdGhlcmApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICByZXR1cm4ge1xuICAgICAgd2VhdGhlcixcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXJsLCB3ZWF0aGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHVybD17dXJsfT5cbiAgICAgICAgPGgyPldlYXRoZXI8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57d2VhdGhlci5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9JTUFHRX0ke3dlYXRoZXIud2VhdGhlclswXS5pY29ufS5wbmdgfSAvPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRpdGxlXCI+e3dlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbn08L2g1PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5UZW1wOiB7TWF0aC5yb3VuZCh3ZWF0aGVyLm1haW4udGVtcCwgMCl9JiM4NDU3OzwvaDQ+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5IdW1pZGl0eToge3dlYXRoZXIubWFpbi5odW1pZGl0eX0lPC9oND5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPldpbmQ6IHt3ZWF0aGVyLndpbmQuc3BlZWR9IG1waCB7ZGVnVG9EaXJlY3Rpb24od2VhdGhlci53aW5kLmRlZyl9PC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib3g6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvd2VhdGhlci5qcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=