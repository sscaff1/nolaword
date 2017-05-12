const express = require('express');
const next = require('next');
const path = require('path');
const fs = require('fs');
const https = require('https');
const fetch = require('isomorphic-unfetch');
const config = require('./config/config.json');
const connectDb = require('./utilities/connectDb');

const router = express.Router();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const CITY = 'New Orleans';

function getNewsDesk(newsDesk) {
  if (newsDesk === 'sports') {
    return { news_desk: 'Sports' };
  }
  return { news_desk: { $ne: 'Sports' } };
}

app.prepare()
.then(() => {
  const server = express();

  server.get(['/sitemap', '/sitemap.xml'], (req, res) => {
    res.sendFile(path.join(__dirname, '/static', '/sitemap.xml'));
  });

  server.get(config.certbot.endpoint, (req, res) => {
    res.send(config.certbot.key);
  });

  router.route('/articles').get((req, res) => {
    if (!req.query.newsDesk) {
      return response.send('Looks like you did not send a proper request');
    }
    const query = getNewsDesk(req.query.newsDesk);
    const LIMIT = 10;
    const skip = (req.query && req.query.page * LIMIT) || 0;
    connectDb()
    .then(db => {
      db.collection('articles').find(query).count().then(total => {
        if (total < (skip + LIMIT)) {
          return res.json({ message: 'out' });
        }
        db.collection('articles').find(query).sort({ pub_date: -1 }).skip(skip).limit(LIMIT).toArray((err, docs) => {
          res.json(docs);
        });
      });
    })
    .catch(error => console.log(error));
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
  });

  if (dev) {
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  } else {
    console.log('using production configs');
    const key = fs.readFileSync('./privkey.pem');
    const cert = fs.readFileSync('./cert.pem');
    https.createServer({
      key,
      cert,
    }, server).listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on https://localhost:3000');
    });
  }
});
