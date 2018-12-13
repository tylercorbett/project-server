require('dotenv').config();
const client = require('../lib/db-client');

client.query(`
    DROP TABLE IF EXISTS goal;
    DROP TABLE IF EXISTS profile;
`)
  .then(
    () => console.log('drop tables are done'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });