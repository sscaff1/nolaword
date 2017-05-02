const MongoClient = require('mongodb').MongoClient;

function makeChanges() {
  MongoClient.connect('mongodb://localhost:27017/nolaword', (err, nolaword) => {
    if (err) {
      throw err;
    }
    const db = nolaword;
    db.collection('articles').find().forEach(item => {
      item.pub_date = new Date(item.pub_date);
      db.collection('articles').save(item);
    });
    console.log('done');
    process.exit(1);
  });
}

makeChanges();
