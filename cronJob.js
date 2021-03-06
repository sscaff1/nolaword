const fetch = require('isomorphic-unfetch');
const schedule = require('node-schedule');
const differenceInDays = require('date-fns/difference_in_days');
const endOfToday = require('date-fns/end_of_today');
const config = require('./config/config.json');
const connectDb = require('./utilities/connectDb');
const QUERY = 'New Orleans';
let db;

function makeRequest(findStr, page) {
  console.log(findStr, page);
  const q = encodeURIComponent(findStr);
  const baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
  let query = '?api-key=' + config.nytimesAPI.key + '&q=' + q + '&sort=newest&page=' + page;
  const urlToFetch = baseUrl + query;
  return fetch(urlToFetch)
  .then(results => results.json())
  .then((response) => {
    if (!response.response) {
      return response;
    }
    return response.response.docs;
  });
}

function fillDB(query, page) {
  connectDb()
  .then(db => {
    makeRequest(query, page)
    .then(articles => {
      if (typeof articles !== 'object') {
        return [false];
      }
      const promises = articles.map(article => {
        return db.collection('articles').findOne({ web_url: article.web_url, pub_date: new Date(article.pub_date) })
        .then(found => {
          if (differenceInDays(endOfToday(), new Date(article.pub_date)) > 60 || found || !article.web_url) {
            return false;
          }
          article.pub_date = new Date(article.pub_date);
          return db.collection('articles').save(article);
        });
      });
      return Promise.all(promises);
    })
    .then(results => {
      if (results.some(result => !result)) {
        console.log('Reached the end');
        return false;
      }
      page += 1;
      setTimeout(() => {
        fillDB(QUERY, page);
      }, 2000);
    })
    .then(() => {
      console.log('connection closed');
      db.close();
    })
    .catch(error => console.log(error));
  });
}

fillDB(QUERY, 0);

const j = schedule.scheduleJob('*/3 * * * *', () => {
  console.log('running job');
  fillDB(QUERY, 0);
});
