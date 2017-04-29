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

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

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
        css: 'h2[data-jsx="84225715"] {font-family: \'Open Sans\';width: 60%;text-align: center;border-bottom: 1px solid #000;}.container[data-jsx="84225715"] {display:-webkit-flex; display:flex;-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;flex-wrap: wrap;justify-content: space-between;padding: 0 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGc0IsQUFDSix5QkFDdUIseUJBQ2QsV0FDUSxtQkFDVyw4QkFDL0IsQ0FDVyxpQ0FDSSxtQ0FDRSw2REFDZSwrQkFDZixnQkFDakIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZXZlbi9Eb2N1bWVudHMvU2l0ZXMvbm9sYXdvcmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvY29uZmlnLmpzb24nKTtcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2xheW91dHMnO1xuaW1wb3J0IHsgQXJ0aWNsZSwgQWQsIG1ha2VSZXF1ZXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmNvbnN0IE5FV1NfREVTSyA9ICduZXdzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFydGljbGVzOiBbXSxcbiAgICBwYWdlOiAxLFxuICAgIGZldGNoaW5nOiBmYWxzZSxcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcbiAgICBjb25zdCBvcmlnaW4gPSByZXEgPyBgJHtyZXEucHJvdG9jb2x9Oi8vJHtyZXEuZ2V0KCdIb3N0Jyl9YCA6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IG1ha2VSZXF1ZXN0KG9yaWdpbiwgTkVXU19ERVNLLCAwKVxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlcyxcbiAgICAgIG9yaWdpbixcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsTGlzdGVuZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjcm9sbExpc3RlbmVyKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zY3JvbGxMaXN0ZW5lcik7XG4gIH1cblxuICBzY3JvbGxMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgcGFnZVlPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgY29uc3QgZG9jSGVpZ2h0ID0gdGhpcy5sYXlvdXQub2Zmc2V0SGVpZ2h0O1xuICAgIGlmICgoZG9jSGVpZ2h0IC0gaGVpZ2h0IC0gcGFnZVlPZmZzZXQgPCA1MCkgJiYgIXRoaXMuc3RhdGUuZmV0Y2hpbmcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmZXRjaGluZzogdHJ1ZSB9LCB0aGlzLmdldEFydGljbGVzKTtcbiAgICB9XG4gIH1cblxuICBnZXRBcnRpY2xlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IHBhZ2UsIGFydGljbGVzOiBjdXJyZW50QXJ0aWNsZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBtYWtlUmVxdWVzdCh0aGlzLnByb3BzLm9yaWdpbiwgTkVXU19ERVNLLCBwYWdlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFydGljbGVzOiBbXG4gICAgICAgIC4uLmN1cnJlbnRBcnRpY2xlcyxcbiAgICAgICAgLi4uYXJ0aWNsZXMsXG4gICAgICBdLFxuICAgICAgZmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgcGFnZTogdGhpcy5zdGF0ZS5wYWdlICsgMSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFydGljbGVzOiBpbml0aWFsQXJ0aWNsZXMsIHVybCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhcnRpY2xlcyA9IFtcbiAgICAgIC4uLmluaXRpYWxBcnRpY2xlcyxcbiAgICAgIC4uLnRoaXMuc3RhdGUuYXJ0aWNsZXMsXG4gICAgXTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3JlZiA9PiB0aGlzLmxheW91dCA9IHJlZn0+XG4gICAgICAgIDxMYXlvdXQgdXJsPXt1cmx9PlxuICAgICAgICAgIDxoMj5OZXdzPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSwgaSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYXJ0aWNsZS5waXhlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8QWRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgYXJ0aWNsZS0ke2l9YH1cbiAgICAgICAgICAgICAgICAgICAgcGl4ZWw9e2FydGljbGUucGl4ZWx9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRsaW5lPXthcnRpY2xlLmhlYWRsaW5lfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17YXJ0aWNsZS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgc25pcHBldD17YXJ0aWNsZS5zbmlwcGV0fVxuICAgICAgICAgICAgICAgICAgICB1cmw9e2FydGljbGUudXJsfVxuICAgICAgICAgICAgICAgICAgICBwcmljZT17YXJ0aWNsZS5wcmljZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gYXJ0aWNsZS5tdWx0aW1lZGlhICYmIGFydGljbGUubXVsdGltZWRpYS5maWx0ZXIoYSA9PiBhLnN1YnR5cGUgPT09ICd0aHVtYm5haWwnKVswXTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QXJ0aWNsZVxuICAgICAgICAgICAgICAgICAga2V5PXtgYXJ0aWNsZS0ke2l9YH1cbiAgICAgICAgICAgICAgICAgIGhlYWRsaW5lPXthcnRpY2xlLmhlYWRsaW5lLnByaW50X2hlYWRsaW5lfVxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgc25pcHBldD17YXJ0aWNsZS5zbmlwcGV0fVxuICAgICAgICAgICAgICAgICAgdXJsPXthcnRpY2xlLndlYl91cmx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
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