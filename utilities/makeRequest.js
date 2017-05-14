import fetch from 'isomorphic-unfetch';
const config = require('../config/config.json');

function getPosition(base = 0) {
  return Math.ceil(Math.random() * 4) + base;
}

function getProducts() {
  const products = [...config.products];
  const first = products.splice(Math.floor(Math.random() * products.length), 1);
  const second = products.splice(Math.floor(Math.random() * products.length), 1);
  return [...first, ...second];
}

export default function makeRequest(host, newsDesk, page) {
  return fetch(`${host}/api/articles?newsDesk=${newsDesk}&page=${page}`)
  .then(response => response.json())
  .then(docs => {
    if (docs.message === 'out') {
      console.log('out of docs');
      return [];
    }
    const position1 = getPosition();
    const position2 = getPosition(5);
    const [product1, product2] = getProducts();
    docs.splice(position1, 0, product1);
    docs.splice(position2, 0, product2);
    return docs;
  })
  .catch(error => console.log(error))
}
