webpackHotUpdate(7,{

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeRequest;

var _isomorphicUnfetch = __webpack_require__(561);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _config = __webpack_require__(562);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeRequest(host, newsDesk, page) {
  return (0, _isomorphicUnfetch2.default)(host + '/api/articles?newsDesk=' + newsDesk + '&page=' + page).then(function (response) {
    return response.json();
  }).then(function (docs) {
    if (docs.message === 'out') {
      console.log('out of docs');
      return [];
    }
    docs.splice(4, 0, _config2.default.products[0]);
    docs.splice(8, 0, _config2.default.products[0]);
    return docs;
  }).catch(function (error) {
    return console.log(error);
  });
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/steven/Documents/Sites/nolaword/components/makeRequest.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/steven/Documents/Sites/nolaword/components/makeRequest.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21ha2VSZXF1ZXN0LmpzP2M3ZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBR1A7Ozs7OztBQUFlLFNBQVMsWUFBWSxNQUFNLFVBQVUsTUFDbEQ7MENBQWdCLG1DQUE4QixzQkFBaUIsTUFDOUQsS0FBSztXQUFZLFNBQVM7QUFEcEIsS0FFTixLQUFLLGdCQUNKO1FBQUksS0FBSyxZQUFZLE9BQ25CO2NBQVEsSUFDUjthQUNEO0FBQ0Q7U0FBSyxPQUFPLEdBQUcsR0FBRyxpQkFBTyxTQUN6QjtTQUFLLE9BQU8sR0FBRyxHQUFHLGlCQUFPLFNBQ3pCO1dBQ0Q7QUFWTSxLQVdOLE1BQU07V0FBUyxRQUFRLElBQUk7QUFDN0IiLCJmaWxlIjoiNy44MTVlYjc2ZDc4NjliYzNmYjUwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VSZXF1ZXN0KGhvc3QsIG5ld3NEZXNrLCBwYWdlKSB7XG4gIHJldHVybiBmZXRjaChgJHtob3N0fS9hcGkvYXJ0aWNsZXM/bmV3c0Rlc2s9JHtuZXdzRGVza30mcGFnZT0ke3BhZ2V9YClcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbihkb2NzID0+IHtcbiAgICBpZiAoZG9jcy5tZXNzYWdlID09PSAnb3V0Jykge1xuICAgICAgY29uc29sZS5sb2coJ291dCBvZiBkb2NzJyk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGRvY3Muc3BsaWNlKDQsIDAsIGNvbmZpZy5wcm9kdWN0c1swXSk7XG4gICAgZG9jcy5zcGxpY2UoOCwgMCwgY29uZmlnLnByb2R1Y3RzWzBdKTtcbiAgICByZXR1cm4gZG9jcztcbiAgfSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbWFrZVJlcXVlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9