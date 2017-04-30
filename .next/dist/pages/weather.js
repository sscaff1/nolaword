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
        'data-jsx': 3546268147
      }, 'Weather'), _react2.default.createElement('div', { className: 'container', 'data-jsx': 3546268147
      }, _react2.default.createElement('div', { className: 'box', 'data-jsx': 3546268147
      }, _react2.default.createElement('h3', { className: 'title', 'data-jsx': 3546268147
      }, weather.name), _react2.default.createElement('img', { src: '' + BASE_IMAGE + weather.weather[0].icon + '.png', 'data-jsx': 3546268147
      }), _react2.default.createElement('h5', { className: 'title', 'data-jsx': 3546268147
      }, weather.weather[0].description), _react2.default.createElement('br', {
        'data-jsx': 3546268147
      }), _react2.default.createElement('h4', { className: 'title', 'data-jsx': 3546268147
      }, 'Temp: ', Math.round(weather.main.temp, 0), '\u2109'), _react2.default.createElement('h4', { className: 'title', 'data-jsx': 3546268147
      }, 'Humidity: ', weather.main.humidity, '%'), _react2.default.createElement('h4', { className: 'title', 'data-jsx': 3546268147
      }, 'Wind: ', weather.wind.speed, ' mph ', degToDirection(weather.wind.deg))), _react2.default.createElement('div', { className: 'box', 'data-jsx': 3546268147
      }, _react2.default.createElement('h3', { className: 'title', 'data-jsx': 3546268147
      }, 'Forecast'), weather.forecast.list.map(function (w, i, arr) {
        return _react2.default.createElement('div', { key: 'forecast-' + i, className: 'forecast', style: { border: i === arr.length - 1 && 0 }, 'data-jsx': 3546268147
        }, _react2.default.createElement('div', {
          'data-jsx': 3546268147
        }, _react2.default.createElement('img', { src: '' + BASE_IMAGE + w.weather[0].icon + '.png', 'data-jsx': 3546268147
        }), _react2.default.createElement('p', { className: 'title', 'data-jsx': 3546268147
        }, w.weather[0].description)), _react2.default.createElement('div', {
          'data-jsx': 3546268147
        }, _react2.default.createElement('p', { className: 'title', 'data-jsx': 3546268147
        }, 'Date: ', (0, _dateFns.format)(w.dt * 1000, 'ddd MMM DD')), _react2.default.createElement('p', { className: 'title', 'data-jsx': 3546268147
        }, 'Temp: ', Math.round(w.temp.min, 0), ' (', Math.round(w.temp.max, 0), ')\u2109'), _react2.default.createElement('p', { className: 'title', 'data-jsx': 3546268147
        }, 'Wind: ', w.speed, ' mph ', degToDirection(w.deg))));
      }))), _react2.default.createElement(_style2.default, {
        styleId: 3546268147,
        css: '.container[data-jsx="3546268147"] {display:-webkit-flex; display:flex;padding-left: 10px;justify-content: space-around;width: 100%;}.box[data-jsx="3546268147"] {height: 100%;text-align: center;width: 40%;border: 1px solid #000;border-radius: 5px;padding: 10px 0;}.title[data-jsx="3546268147"] {margin: 0;}.forecast[data-jsx="3546268147"] {display:-webkit-flex; display:flex;justify-content: space-between;align-items: center;width: 100%;padding: 10px 0;border-bottom: 1px solid black;}.forecast[data-jsx="3546268147"] div[data-jsx="3546268147"]:first-child {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;width: 50%;}.forecast[data-jsx="3546268147"] div[data-jsx="3546268147"]:last-child {width: 50%;}'
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