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


var NEWS_DESK = 'news';

var News = function (_Component) {
  (0, _inherits3.default)(News, _Component);

  function News() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, News);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = News.__proto__ || (0, _getPrototypeOf2.default)(News)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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

  (0, _createClass3.default)(News, [{
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
      }, 'News'), _react2.default.createElement('div', { className: 'container', 'data-jsx': 84225715
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
        css: 'h2[data-jsx="84225715"] {font-family: \'Open Sans\';width: 60%;text-align: center;border-bottom: 1px solid #000;}.container[data-jsx="84225715"] {display:-webkit-flex; display:flex;-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;flex-wrap: wrap;justify-content: space-between;padding: 0 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGc0IsQUFDSix5QkFDdUIseUJBQ2QsV0FDUSxtQkFDVyw4QkFDL0IsQ0FDVyxpQ0FDSSxtQ0FDRSw2REFDZSwrQkFDZixnQkFDakIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZXZlbi9Eb2N1bWVudHMvU2l0ZXMvbm9sYXdvcmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL2NvbmZpZy5qc29uJyk7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9sYXlvdXRzJztcbmltcG9ydCB7IEFydGljbGUsIEFkLCBtYWtlUmVxdWVzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5jb25zdCBORVdTX0RFU0sgPSAnbmV3cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBhcnRpY2xlczogW10sXG4gICAgcGFnZTogMSxcbiAgICBmZXRjaGluZzogZmFsc2UsXG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSB9KSB7XG4gICAgY29uc3Qgb3JpZ2luID0gcmVxID8gYCR7cmVxLnByb3RvY29sfTovLyR7cmVxLmdldCgnSG9zdCcpfWAgOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBtYWtlUmVxdWVzdChvcmlnaW4sIE5FV1NfREVTSywgMClcbiAgICByZXR1cm4ge1xuICAgICAgYXJ0aWNsZXMsXG4gICAgICBvcmlnaW4sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zY3JvbGxMaXN0ZW5lcik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxMaXN0ZW5lcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2Nyb2xsTGlzdGVuZXIpO1xuICB9XG5cbiAgc2Nyb2xsTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IHBhZ2VZT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGNvbnN0IGRvY0hlaWdodCA9IHRoaXMubGF5b3V0Lm9mZnNldEhlaWdodDtcbiAgICBpZiAoKGRvY0hlaWdodCAtIGhlaWdodCAtIHBhZ2VZT2Zmc2V0IDwgNTApICYmICF0aGlzLnN0YXRlLmZldGNoaW5nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmV0Y2hpbmc6IHRydWUgfSwgdGhpcy5nZXRBcnRpY2xlcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QXJ0aWNsZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBwYWdlLCBhcnRpY2xlczogY3VycmVudEFydGljbGVzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFydGljbGVzID0gYXdhaXQgbWFrZVJlcXVlc3QodGhpcy5wcm9wcy5vcmlnaW4sIE5FV1NfREVTSywgcGFnZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhcnRpY2xlczogW1xuICAgICAgICAuLi5jdXJyZW50QXJ0aWNsZXMsXG4gICAgICAgIC4uLmFydGljbGVzLFxuICAgICAgXSxcbiAgICAgIGZldGNoaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IHRoaXMuc3RhdGUucGFnZSArIDEsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhcnRpY2xlczogaW5pdGlhbEFydGljbGVzLCB1cmwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXJ0aWNsZXMgPSBbXG4gICAgICAuLi5pbml0aWFsQXJ0aWNsZXMsXG4gICAgICAuLi50aGlzLnN0YXRlLmFydGljbGVzLFxuICAgIF07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtyZWYgPT4gdGhpcy5sYXlvdXQgPSByZWZ9PlxuICAgICAgICA8TGF5b3V0IHVybD17dXJsfT5cbiAgICAgICAgICA8aDI+TmV3czwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFydGljbGUucGl4ZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEFkXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGFydGljbGUtJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgIHBpeGVsPXthcnRpY2xlLnBpeGVsfVxuICAgICAgICAgICAgICAgICAgICBoZWFkbGluZT17YXJ0aWNsZS5oZWFkbGluZX1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2FydGljbGUuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIHNuaXBwZXQ9e2FydGljbGUuc25pcHBldH1cbiAgICAgICAgICAgICAgICAgICAgdXJsPXthcnRpY2xlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2FydGljbGUucHJpY2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGFydGljbGUubXVsdGltZWRpYSAmJiBhcnRpY2xlLm11bHRpbWVkaWEuZmlsdGVyKGEgPT4gYS5zdWJ0eXBlID09PSAndGh1bWJuYWlsJylbMF07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFydGljbGVcbiAgICAgICAgICAgICAgICAgIGtleT17YGFydGljbGUtJHtpfWB9XG4gICAgICAgICAgICAgICAgICBoZWFkbGluZT17YXJ0aWNsZS5oZWFkbGluZS5wcmludF9oZWFkbGluZX1cbiAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgIHNuaXBwZXQ9e2FydGljbGUuc25pcHBldH1cbiAgICAgICAgICAgICAgICAgIHVybD17YXJ0aWNsZS53ZWJfdXJsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
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

  return News;
}(_react.Component);

exports.default = News;