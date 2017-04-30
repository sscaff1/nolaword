'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _layouts = require('../layouts');

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require('../config/config.json');


var NEWS_DESK = 'sports';

var Sports = function (_Component) {
  (0, _inherits3.default)(Sports, _Component);

  function Sports() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Sports);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Sports.__proto__ || (0, _getPrototypeOf2.default)(Sports)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      articles: [],
      page: 1,
      fetching: false
    }, _this.scrollListener = function () {
      var height = window.innerHeight;
      var pageYOffset = window.pageYOffset;
      var docHeight = _this.layout.offsetHeight;
      if (docHeight - height - pageYOffset < 50 && !_this.state.fetching) {
        _this.setState({ fetching: true }, _this.getArticles);
      }
    }, _this.getArticles = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var _this$state, page, currentArticles, articles;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, page = _this$state.page, currentArticles = _this$state.articles;
              _context.next = 3;
              return (0, _components.makeRequest)(_this.props.origin, NEWS_DESK, page);

            case 3:
              articles = _context.sent;

              _this.setState({
                articles: [].concat((0, _toConsumableArray3.default)(currentArticles), (0, _toConsumableArray3.default)(articles)),
                fetching: false,
                page: _this.state.page + 1
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Sports, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.scrollListener);
      window.addEventListener('resize', this.scrollListener);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollListener);
      window.removeEventListener('resize', this.scrollListener);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          initialArticles = _props.articles,
          url = _props.url;

      var articles = [].concat((0, _toConsumableArray3.default)(initialArticles), (0, _toConsumableArray3.default)(this.state.articles));
      return _react2.default.createElement('div', { ref: function ref(_ref3) {
          return _this3.layout = _ref3;
        } }, _react2.default.createElement(_layouts.Layout, { url: url }, _react2.default.createElement('h2', {
        'data-jsx': 84225715
      }, 'Sports'), _react2.default.createElement('div', { className: 'container', 'data-jsx': 84225715
      }, articles.map(function (article, i) {
        if (article.pixel) {
          return _react2.default.createElement(_components.Ad, {
            key: 'article-' + i,
            pixel: article.pixel,
            headline: article.headline,
            image: article.image,
            snippet: article.snippet,
            url: article.url,
            price: article.price
          });
        }
        var image = article.multimedia && article.multimedia.filter(function (a) {
          return a.subtype === 'thumbnail';
        })[0];
        return _react2.default.createElement(_components.Article, {
          key: 'article-' + i,
          headline: article.headline.print_headline,
          image: image,
          snippet: article.snippet,
          url: article.web_url
        });
      })), _react2.default.createElement(_style2.default, {
        styleId: 84225715,
        css: 'h2[data-jsx="84225715"] {font-family: \'Open Sans\';width: 60%;text-align: center;border-bottom: 1px solid #000;}.container[data-jsx="84225715"] {display:-webkit-flex; display:flex;-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;flex-wrap: wrap;justify-content: space-between;padding: 0 10px;}'
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref5) {
        var req = _ref5.req;
        var origin, articles;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                origin = req ? req.protocol + '://' + req.get('Host') : window.location.origin;
                _context2.next = 3;
                return (0, _components.makeRequest)(origin, NEWS_DESK, 0);

              case 3:
                articles = _context2.sent;
                return _context2.abrupt('return', {
                  articles: articles,
                  origin: origin
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Sports;
}(_react.Component);

exports.default = Sports;