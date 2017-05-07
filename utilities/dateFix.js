const connectDb = require('./connectDb');

connectDb()
.then(db => {
  db.collection('articles').find().forEach(item => {
    item.pub_date = new Date(item.pub_date);
    db.collection('articles').save(item);
  });
  console.log('done');
  process.exit(1);
})
.catch(error => console.log(error));
