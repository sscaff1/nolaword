const express = require('express');
const next = require('next');
const path = require('path');
const fetch = require('isomorphic-unfetch');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config/config.json');

const router = express.Router();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const CITY = 'New Orleans';

function getNewsDesk(newsDesk) {
  switch(newsDesk) {
    case 'sports':
      return { news_desk: 'Sports' };
    case 'news':
    default:
      return { news_desk: { $ne: 'Sports' } };
  }
}

app.prepare()
.then(() => {
  const server = express();
  let db;

  MongoClient.connect('mongodb://localhost:27017/nolaword', (err, nolaword) => {
    if (err) {
      throw err;
    }
    db = nolaword;
  });

  router.route('/articles').get((req, res) => {
    if (!req.query.newsDesk) {
      return response.send('Looks like you did not send a proper request');
    }
    const query = getNewsDesk(req.query.newsDesk);
    const LIMIT = 10;
    const skip = (req.query && req.query.page * LIMIT) || 0;
    db.collection('articles').find(query).count().then(total => {
      if (total < (skip + LIMIT)) {
        return res.json({ message: 'out' });
      }
      db.collection('articles').find(query).skip(skip).limit(LIMIT).toArray((err, docs) => {
        res.json(docs);
      });
    });
  });

  router.route('/weather').get((req, res) => {
    const BASE_REQUEST = 'http://api.openweathermap.org/data/2.5/';
    const WEATHER = 'weather?';
    const FORECAST = 'forecast/daily?';
    let query = req.query.zipCode ? 'zip=' + req.query.zipCode : 'q=' + CITY;
    query += 'us&units=imperial&APPID=' + config.openWeather.key;
    const promises = [
      fetch(BASE_REQUEST + WEATHER + query),
      fetch(BASE_REQUEST + FORECAST + query),
    ];
    Promise.all(promises)
    .then(responses => {
      const jsonPromises = responses.map(r => r.json())
      return Promise.all(jsonPromises);
    })
    .then(weather => res.json(Object.assign({}, weather[0], { forecast: weather[1] })))
    .catch(error => console.log(error));
  });

  server.use('/api', router);

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
})
