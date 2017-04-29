import fetch from 'isomorphic-unfetch';
import config from '../config/config.json';

export default function makeRequest(host, newsDesk, page) {
  return fetch(`${host}/api/articles?newsDesk=${newsDesk}&page=${page}`)
  .then(response => response.json())
  .then(docs => {
    if (docs.message === 'out') {
      console.log('out of docs');
      return [];
    }
    docs.splice(4, 0, config.products[0]);
    docs.splice(8, 0, config.products[0]);
    return docs;
  })
  .catch(error => console.log(error))
}
