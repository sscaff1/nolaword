const MongoClient = require('mongodb').MongoClient;

module.exports = function connectDb() {
  return new Promise((resolve, reject) => {
    MongoClient.connect('mongodb://localhost:27017/nolaword', (err, nolaword) => {
      if (err) {
        reject(err);
      }
      resolve(nolaword)
    });
  })
}
