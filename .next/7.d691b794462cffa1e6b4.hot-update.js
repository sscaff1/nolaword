webpackHotUpdate(7,{

/***/ 634:
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

var _isomorphicUnfetch = __webpack_require__(566);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _dateFns = __webpack_require__(673);

var _layouts = __webpack_require__(573);

var _components = __webpack_require__(569);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = __webpack_require__(561);


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
        'data-jsx': 3015701936
      }, 'Weather'), _react2.default.createElement('div', { className: 'container', 'data-jsx': 3015701936
      }, _react2.default.createElement('div', { className: 'box', 'data-jsx': 3015701936
      }, _react2.default.createElement('h3', { className: 'title', 'data-jsx': 3015701936
      }, weather.name), _react2.default.createElement('img', { src: '' + BASE_IMAGE + weather.weather[0].icon + '.png', 'data-jsx': 3015701936
      }), _react2.default.createElement('h5', { className: 'title', 'data-jsx': 3015701936
      }, weather.weather[0].description), _react2.default.createElement('br', {
        'data-jsx': 3015701936
      }), _react2.default.createElement('h4', { className: 'title', 'data-jsx': 3015701936
      }, 'Temp: ', Math.round(weather.main.temp, 0), '\u2109'), _react2.default.createElement('h4', { className: 'title', 'data-jsx': 3015701936
      }, 'Humidity: ', weather.main.humidity, '%'), _react2.default.createElement('h4', { className: 'title', 'data-jsx': 3015701936
      }, 'Wind: ', weather.wind.speed, ' mph ', degToDirection(weather.wind.deg))), _react2.default.createElement('div', { className: 'box', 'data-jsx': 3015701936
      }, _react2.default.createElement('h3', { className: 'title', 'data-jsx': 3015701936
      }, 'Forecast'), weather.forecast.list.map(function (w, i, arr) {
        return _react2.default.createElement('div', { key: 'forecast-' + i, className: 'forecast', style: { border: i === arr.length - 1 && 0 }, 'data-jsx': 3015701936
        }, _react2.default.createElement('div', {
          'data-jsx': 3015701936
        }, _react2.default.createElement('img', { src: '' + BASE_IMAGE + w.weather[0].icon + '.png', 'data-jsx': 3015701936
        }), _react2.default.createElement('p', { className: 'title', 'data-jsx': 3015701936
        }, w.weather[0].description)), _react2.default.createElement('div', {
          'data-jsx': 3015701936
        }, _react2.default.createElement('p', { className: 'title', 'data-jsx': 3015701936
        }, 'Date: ', (0, _dateFns.format)(w.dt * 1000, 'ddd MMM DD')), _react2.default.createElement('p', { className: 'title', 'data-jsx': 3015701936
        }, 'Temp: ', Math.round(w.temp.min, 0), ' (', Math.round(w.temp.max, 0), ')\u2109'), _react2.default.createElement('p', { className: 'title', 'data-jsx': 3015701936
        }, 'Wind: ', w.speed, ' mph ', degToDirection(w.deg))));
      }))), _react2.default.createElement(_style2.default, {
        styleId: 3015701936,
        css: '.container[data-jsx="3015701936"] {display:-webkit-flex; display:flex;justify-content: space-around;width: 100%;}.box[data-jsx="3015701936"] {height: 100%;text-align: center;width: 40%;border: 1px solid #000;border-radius: 5px;padding: 10px 0;}.title[data-jsx="3015701936"] {margin: 0;}.forecast[data-jsx="3015701936"] {display:-webkit-flex; display:flex;justify-content: space-between;align-items: center;width: 100%;padding: 10px 0;border-bottom: 1px solid black;}.forecast[data-jsx="3015701936"] div[data-jsx="3015701936"]:first-child {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;width: 50%;}.forecast[data-jsx="3015701936"] div[data-jsx="3015701936"]:last-child {width: 50%;}@media (max-width: 500px) {.container[data-jsx="3015701936"] {-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;}.box[data-jsx="3015701936"] {width: 90%;margin-bottom: 5px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dlYXRoZXIuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUNFLG1DQUNJLG1DQUNnQiw4QkFDbEIsWUFDYixDQUNLLDZCQUNTLGFBQ00sbUJBQ1IsV0FDWSx1QkFDSixtQkFDSCxnQkFDakIsQ0FDTywrQkFDSSxVQUNYLENBQ1Usa0NBQ0ssbUNBQ2lCLCtCQUNYLG9CQUNSLFlBQ0ksZ0JBQ2UsK0JBQ2hDLENBQzBCLHlFQUNYLG1DQUNTLGtGQUNILG9CQUNULFdBQ1osQ0FDeUIsd0VBQ2IsV0FDWixDQUMwQiwyQkFDYixtQ0FDYSxrRkFDSCxvQkFDckIsQ0FDSyw2QkFDTyxXQUNRLG1CQUNwQixDQUNGIiwiZmlsZSI6InBhZ2VzL3dlYXRoZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZXZlbi9Eb2N1bWVudHMvU2l0ZXMvbm9sYXdvcmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvY29uZmlnLmpzb24nKTtcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2xheW91dHMnO1xuaW1wb3J0IHsgQXJ0aWNsZSwgQWQsIG1ha2VSZXF1ZXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmNvbnN0IE5FV1NfREVTSyA9ICd3ZWF0aGVyJztcbmNvbnN0IEJBU0VfSU1BR0UgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8nO1xuXG5mdW5jdGlvbiBkZWdUb0RpcmVjdGlvbihkZWdyZWUpIHtcbiAgY29uc3QgdmFsID0gTWF0aC5yb3VuZCgoZGVncmVlIC8gMjIuNTUpICsgMC41LCAwKTtcbiAgY29uc3QgZGlyZWN0aW9ucyA9IFtcIk5cIixcIk5ORVwiLFwiTkVcIixcIkVORVwiLFwiRVwiLFwiRVNFXCIsIFwiU0VcIiwgXCJTU0VcIixcIlNcIixcIlNTV1wiLFwiU1dcIixcIldTV1wiLFwiV1wiLFwiV05XXCIsXCJOV1wiLFwiTk5XXCJdO1xuICByZXR1cm4gZGlyZWN0aW9uc1t2YWwgJSAxNl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB6aXBDb2RlOiAnJyxcbiAgfTtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSB9KSB7XG4gICAgY29uc3Qgb3JpZ2luID0gcmVxID8gYCR7cmVxLnByb3RvY29sfTovLyR7cmVxLmdldCgnSG9zdCcpfWAgOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKGAke29yaWdpbn0vYXBpL3dlYXRoZXJgKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdlYXRoZXIsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVybCwgd2VhdGhlciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB1cmw9e3VybH0+XG4gICAgICAgIDxoMj5XZWF0aGVyPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e3dlYXRoZXIubmFtZX08L2gzPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfSU1BR0V9JHt3ZWF0aGVyLndlYXRoZXJbMF0uaWNvbn0ucG5nYH0gLz5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt3ZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9oNT5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+VGVtcDoge01hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXAsIDApfSYjODQ1Nzs8L2g0PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+SHVtaWRpdHk6IHt3ZWF0aGVyLm1haW4uaHVtaWRpdHl9JTwvaDQ+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5XaW5kOiB7d2VhdGhlci53aW5kLnNwZWVkfSBtcGgge2RlZ1RvRGlyZWN0aW9uKHdlYXRoZXIud2luZC5kZWcpfTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkZvcmVjYXN0PC9oMz5cbiAgICAgICAgICAgIHt3ZWF0aGVyLmZvcmVjYXN0Lmxpc3QubWFwKCh3LCBpLCBhcnIpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Bmb3JlY2FzdC0ke2l9YH0gY2xhc3NOYW1lPVwiZm9yZWNhc3RcIiBzdHlsZT17eyBib3JkZXI6IGkgPT09IGFyci5sZW5ndGggLSAxICYmIDAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX0lNQUdFfSR7dy53ZWF0aGVyWzBdLmljb259LnBuZ2B9IC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt3LndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkRhdGU6IHtmb3JtYXQody5kdCAqIDEwMDAsICdkZGQgTU1NIEREJyl9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5UZW1wOiB7TWF0aC5yb3VuZCh3LnRlbXAubWluLCAwKX0gKHtNYXRoLnJvdW5kKHcudGVtcC5tYXgsIDApfSkmIzg0NTc7PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5XaW5kOiB7dy5zcGVlZH0gbXBoIHtkZWdUb0RpcmVjdGlvbih3LmRlZyl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JlY2FzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9yZWNhc3QgZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JlY2FzdCBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/weather.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93ZWF0aGVyLmpzP2E4ZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0I7Ozs7QUFDVDs7OztBQUNFOztBQUVBOztBQUNhOzs7O0FBRnRCLElBQU0sU0FBUzs7O0FBSWYsSUFBTSxZQUFZO0FBQ2xCLElBQU0sYUFBYTs7QUFFbkIsU0FBUyxlQUFlLFFBQ3RCO01BQU0sTUFBTSxLQUFLLE1BQU8sU0FBUyxRQUFTLEtBQzFDO01BQU0sYUFBYSxDQUFDLEtBQUksT0FBTSxNQUFLLE9BQU0sS0FBSSxPQUFPLE1BQU0sT0FBTSxLQUFJLE9BQU0sTUFBSyxPQUFNLEtBQUksT0FBTSxNQUMvRjtTQUFPLFdBQVcsTUFDbkI7OztJQUVvQjs7Ozs7Ozs7Ozs7Ozs7OE1BQ25CO2VBQ1c7QUFBVDs7Ozs7NkJBV087bUJBQ2tCLEtBQUs7VUFBdEI7VUFBSyxpQkFDYjs7NkJBQ0csaUNBQU8sS0FDTjtvQkFBQTtBQUFBLFNBQ0EsbURBQUssV0FBVSx5QkFDYjt5QkFBQSx1QkFBSyxXQUFVLG1CQUNiO3lCQUFBLHNCQUFJLFdBQVUscUJBQVM7aUJBQ3ZCLDhDQUFLLFVBQVEsYUFBYSxRQUFRLFFBQVEsR0FBRyxPQUE3QyxvQkFDQTswQkFBQSxzQkFBSSxXQUFVLHFCQUFTO2lCQUFRLFFBQVEsR0FDdkM7b0JBQ0E7QUFEQSwwQkFDQSxzQkFBSSxXQUFVLHFCQUFkO1NBQTZCLGVBQUssTUFBTSxRQUFRLEtBQUssTUFBTSxJQUMzRCxpREFBSSxXQUFVLHFCQUFkO1NBQWlDLHNCQUFRLEtBQUssVUFDOUMsNENBQUksV0FBVSxxQkFBZDtTQUE2QixrQkFBUSxLQUFLLE9BQVksd0JBQWUsUUFBUSxLQUUvRSwrQ0FBSyxXQUFVLG1CQUNiO3lCQUFBLHNCQUFJLFdBQVUscUJBQWQ7U0FDQyxxQkFBUSxTQUFTLEtBQUssSUFBSSxVQUFDLEdBQUcsR0FBRyxLQUFQOytCQUN6Qix1QkFBSyxtQkFBaUIsR0FBSyxXQUFVLFlBQVcsT0FBTyxFQUFFLFFBQVEsTUFBTSxJQUFJLFNBQVMsS0FBSyxpQkFDdkY7U0FERixrQkFDRTtzQkFDRTtBQURGLGtEQUNPLFVBQVEsYUFBYSxFQUFFLFFBQVEsR0FBRyxPQUF2QyxvQkFDQTs0QkFBQSxxQkFBRyxXQUFVLHFCQUFTO2FBQUUsUUFBUSxHQUVsQztzQkFDRTtBQURGLDJCQUNFLHFCQUFHLFdBQVUscUJBQWI7V0FBNEIsK0JBQU8sRUFBRSxLQUFLLE1BQzFDLHFEQUFHLFdBQVUscUJBQWI7V0FBNEIsZUFBSyxNQUFNLEVBQUUsS0FBSyxLQUFLLElBQU0sV0FBSyxNQUFNLEVBQUUsS0FBSyxLQUFLLElBQ2hGLGlEQUFHLFdBQVUscUJBQWI7V0FBNEIsWUFBRSxPQUFZLHdCQUFlLEVBQUU7QUFUaEU7aUJBZFA7YUE0RUg7QUE1RUc7Ozs7OztZQVg0Qjs7Ozs7bUJBQ3hCO3lCQUFTLE1BQVMsSUFBSSxtQkFBYyxJQUFJLElBQUksVUFBWSxPQUFPLFNBQVM7O3dEQUMvQyx5QkFBc0IsS0FBSzt5QkFBWSxTQUFTO0FBQXpEOzttQkFBaEI7OzsyQkFDQztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVCtCOztrQkFBaEIsUSIsImZpbGUiOiI3LmQ2OTFiNzk0NDYyY2ZmYTFlNmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvY29uZmlnLmpzb24nKTtcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2xheW91dHMnO1xuaW1wb3J0IHsgQXJ0aWNsZSwgQWQsIG1ha2VSZXF1ZXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmNvbnN0IE5FV1NfREVTSyA9ICd3ZWF0aGVyJztcbmNvbnN0IEJBU0VfSU1BR0UgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8nO1xuXG5mdW5jdGlvbiBkZWdUb0RpcmVjdGlvbihkZWdyZWUpIHtcbiAgY29uc3QgdmFsID0gTWF0aC5yb3VuZCgoZGVncmVlIC8gMjIuNTUpICsgMC41LCAwKTtcbiAgY29uc3QgZGlyZWN0aW9ucyA9IFtcIk5cIixcIk5ORVwiLFwiTkVcIixcIkVORVwiLFwiRVwiLFwiRVNFXCIsIFwiU0VcIiwgXCJTU0VcIixcIlNcIixcIlNTV1wiLFwiU1dcIixcIldTV1wiLFwiV1wiLFwiV05XXCIsXCJOV1wiLFwiTk5XXCJdO1xuICByZXR1cm4gZGlyZWN0aW9uc1t2YWwgJSAxNl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB6aXBDb2RlOiAnJyxcbiAgfTtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSB9KSB7XG4gICAgY29uc3Qgb3JpZ2luID0gcmVxID8gYCR7cmVxLnByb3RvY29sfTovLyR7cmVxLmdldCgnSG9zdCcpfWAgOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKGAke29yaWdpbn0vYXBpL3dlYXRoZXJgKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdlYXRoZXIsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVybCwgd2VhdGhlciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB1cmw9e3VybH0+XG4gICAgICAgIDxoMj5XZWF0aGVyPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e3dlYXRoZXIubmFtZX08L2gzPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfSU1BR0V9JHt3ZWF0aGVyLndlYXRoZXJbMF0uaWNvbn0ucG5nYH0gLz5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt3ZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9oNT5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+VGVtcDoge01hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXAsIDApfSYjODQ1Nzs8L2g0PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+SHVtaWRpdHk6IHt3ZWF0aGVyLm1haW4uaHVtaWRpdHl9JTwvaDQ+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5XaW5kOiB7d2VhdGhlci53aW5kLnNwZWVkfSBtcGgge2RlZ1RvRGlyZWN0aW9uKHdlYXRoZXIud2luZC5kZWcpfTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkZvcmVjYXN0PC9oMz5cbiAgICAgICAgICAgIHt3ZWF0aGVyLmZvcmVjYXN0Lmxpc3QubWFwKCh3LCBpLCBhcnIpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Bmb3JlY2FzdC0ke2l9YH0gY2xhc3NOYW1lPVwiZm9yZWNhc3RcIiBzdHlsZT17eyBib3JkZXI6IGkgPT09IGFyci5sZW5ndGggLSAxICYmIDAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX0lNQUdFfSR7dy53ZWF0aGVyWzBdLmljb259LnBuZ2B9IC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt3LndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkRhdGU6IHtmb3JtYXQody5kdCAqIDEwMDAsICdkZGQgTU1NIEREJyl9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5UZW1wOiB7TWF0aC5yb3VuZCh3LnRlbXAubWluLCAwKX0gKHtNYXRoLnJvdW5kKHcudGVtcC5tYXgsIDApfSkmIzg0NTc7PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5XaW5kOiB7dy5zcGVlZH0gbXBoIHtkZWdUb0RpcmVjdGlvbih3LmRlZyl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JlY2FzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9yZWNhc3QgZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JlY2FzdCBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3dlYXRoZXIuanM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9