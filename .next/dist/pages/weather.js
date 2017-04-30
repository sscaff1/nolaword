'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _dateFns = require('date-fns');

var _layouts = require('../layouts');

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require('../config/config.json');


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
        'data-jsx': 2618273853
      }, 'Weather'), _react2.default.createElement('div', { className: 'container', 'data-jsx': 2618273853
      }, _react2.default.createElement('div', { className: 'box', 'data-jsx': 2618273853
      }, _react2.default.createElement('h3', { className: 'title', 'data-jsx': 2618273853
      }, weather.name), _react2.default.createElement('img', { src: '' + BASE_IMAGE + weather.weather[0].icon + '.png', 'data-jsx': 2618273853
      }), _react2.default.createElement('h5', { className: 'title', 'data-jsx': 2618273853
      }, weather.weather[0].description), _react2.default.createElement('br', {
        'data-jsx': 2618273853
      }), _react2.default.createElement('h4', { className: 'title', 'data-jsx': 2618273853
      }, 'Temp: ', Math.round(weather.main.temp, 0), '\u2109'), _react2.default.createElement('h4', { className: 'title', 'data-jsx': 2618273853
      }, 'Humidity: ', weather.main.humidity, '%'), _react2.default.createElement('h4', { className: 'title', 'data-jsx': 2618273853
      }, 'Wind: ', weather.wind.speed, ' mph ', degToDirection(weather.wind.deg))), _react2.default.createElement('div', { className: 'box', 'data-jsx': 2618273853
      }, _react2.default.createElement('h3', { className: 'title', 'data-jsx': 2618273853
      }, 'Forecast'), weather.forecast.list.map(function (w, i, arr) {
        return _react2.default.createElement('div', { key: 'forecast-' + i, className: 'forecast', style: { border: i === arr.length - 1 && 0 }, 'data-jsx': 2618273853
        }, _react2.default.createElement('div', {
          'data-jsx': 2618273853
        }, _react2.default.createElement('img', { src: '' + BASE_IMAGE + w.weather[0].icon + '.png', 'data-jsx': 2618273853
        }), _react2.default.createElement('p', { className: 'title', 'data-jsx': 2618273853
        }, w.weather[0].description)), _react2.default.createElement('div', {
          'data-jsx': 2618273853
        }, _react2.default.createElement('p', { className: 'title', 'data-jsx': 2618273853
        }, 'Date: ', (0, _dateFns.format)(w.dt * 1000, 'ddd MMM DD')), _react2.default.createElement('p', { className: 'title', 'data-jsx': 2618273853
        }, 'Temp: ', Math.round(w.temp.min, 0), ' (', Math.round(w.temp.max, 0), ')\u2109'), _react2.default.createElement('p', { className: 'title', 'data-jsx': 2618273853
        }, 'Wind: ', w.speed, ' mph ', degToDirection(w.deg))));
      }))), _react2.default.createElement(_style2.default, {
        styleId: 2618273853,
        css: '.container[data-jsx="2618273853"] {display:-webkit-flex; display:flex;justify-content: space-around;width: 100%;-webkit-flex: 1;-moz-flex: 1;flex: 1;}.box[data-jsx="2618273853"] {height: 100%;text-align: center;width: 40%;border: 1px solid #000;border-radius: 5px;padding: 10px 0;}.title[data-jsx="2618273853"] {margin: 0;}.forecast[data-jsx="2618273853"] {display:-webkit-flex; display:flex;justify-content: space-between;align-items: center;width: 100%;padding: 10px 0;border-bottom: 1px solid black;}.forecast[data-jsx="2618273853"] div[data-jsx="2618273853"]:first-child {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;width: 50%;}.forecast[data-jsx="2618273853"] div[data-jsx="2618273853"]:last-child {width: 50%;}@media (max-width: 500px) {.container[data-jsx="2618273853"] {-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;}.box[data-jsx="2618273853"] {width: 90%;margin-bottom: 5px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dlYXRoZXIuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUNFLG1DQUNJLG1DQUNnQiw4QkFDbEIsWUFDSixxQ0FDVCxDQUNLLDZCQUNTLGFBQ00sbUJBQ1IsV0FDWSx1QkFDSixtQkFDSCxnQkFDakIsQ0FDTywrQkFDSSxVQUNYLENBQ1Usa0NBQ0ssbUNBQ2lCLCtCQUNYLG9CQUNSLFlBQ0ksZ0JBQ2UsK0JBQ2hDLENBQzBCLHlFQUNYLG1DQUNTLGtGQUNILG9CQUNULFdBQ1osQ0FDeUIsd0VBQ2IsV0FDWixDQUMwQiwyQkFDYixtQ0FDYSxrRkFDSCxvQkFDckIsQ0FDSyw2QkFDTyxXQUNRLG1CQUNwQixDQUNGIiwiZmlsZSI6InBhZ2VzL3dlYXRoZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZXZlbi9Eb2N1bWVudHMvU2l0ZXMvbm9sYXdvcmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvY29uZmlnLmpzb24nKTtcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2xheW91dHMnO1xuaW1wb3J0IHsgQXJ0aWNsZSwgQWQsIG1ha2VSZXF1ZXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmNvbnN0IE5FV1NfREVTSyA9ICd3ZWF0aGVyJztcbmNvbnN0IEJBU0VfSU1BR0UgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8nO1xuXG5mdW5jdGlvbiBkZWdUb0RpcmVjdGlvbihkZWdyZWUpIHtcbiAgY29uc3QgdmFsID0gTWF0aC5yb3VuZCgoZGVncmVlIC8gMjIuNTUpICsgMC41LCAwKTtcbiAgY29uc3QgZGlyZWN0aW9ucyA9IFtcIk5cIixcIk5ORVwiLFwiTkVcIixcIkVORVwiLFwiRVwiLFwiRVNFXCIsIFwiU0VcIiwgXCJTU0VcIixcIlNcIixcIlNTV1wiLFwiU1dcIixcIldTV1wiLFwiV1wiLFwiV05XXCIsXCJOV1wiLFwiTk5XXCJdO1xuICByZXR1cm4gZGlyZWN0aW9uc1t2YWwgJSAxNl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB6aXBDb2RlOiAnJyxcbiAgfTtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSB9KSB7XG4gICAgY29uc3Qgb3JpZ2luID0gcmVxID8gYCR7cmVxLnByb3RvY29sfTovLyR7cmVxLmdldCgnSG9zdCcpfWAgOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKGAke29yaWdpbn0vYXBpL3dlYXRoZXJgKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdlYXRoZXIsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVybCwgd2VhdGhlciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB1cmw9e3VybH0+XG4gICAgICAgIDxoMj5XZWF0aGVyPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e3dlYXRoZXIubmFtZX08L2gzPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfSU1BR0V9JHt3ZWF0aGVyLndlYXRoZXJbMF0uaWNvbn0ucG5nYH0gLz5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt3ZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9oNT5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+VGVtcDoge01hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXAsIDApfSYjODQ1Nzs8L2g0PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+SHVtaWRpdHk6IHt3ZWF0aGVyLm1haW4uaHVtaWRpdHl9JTwvaDQ+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5XaW5kOiB7d2VhdGhlci53aW5kLnNwZWVkfSBtcGgge2RlZ1RvRGlyZWN0aW9uKHdlYXRoZXIud2luZC5kZWcpfTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkZvcmVjYXN0PC9oMz5cbiAgICAgICAgICAgIHt3ZWF0aGVyLmZvcmVjYXN0Lmxpc3QubWFwKCh3LCBpLCBhcnIpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Bmb3JlY2FzdC0ke2l9YH0gY2xhc3NOYW1lPVwiZm9yZWNhc3RcIiBzdHlsZT17eyBib3JkZXI6IGkgPT09IGFyci5sZW5ndGggLSAxICYmIDAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX0lNQUdFfSR7dy53ZWF0aGVyWzBdLmljb259LnBuZ2B9IC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt3LndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkRhdGU6IHtmb3JtYXQody5kdCAqIDEwMDAsICdkZGQgTU1NIEREJyl9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5UZW1wOiB7TWF0aC5yb3VuZCh3LnRlbXAubWluLCAwKX0gKHtNYXRoLnJvdW5kKHcudGVtcC5tYXgsIDApfSkmIzg0NTc7PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5XaW5kOiB7dy5zcGVlZH0gbXBoIHtkZWdUb0RpcmVjdGlvbih3LmRlZyl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm94IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9yZWNhc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcmVjYXN0IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9yZWNhc3QgZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/weather.js?entry */'
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