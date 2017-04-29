'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeRequest;

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _config = require('../config/config.json');

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