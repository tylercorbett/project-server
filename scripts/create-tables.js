require('dotenv').config();
const client = require('../lib/db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS profile (
        id SERIAL PRIMARY KEY,
        username VARCHAR(256) NOT NULL,
        password VARCHAR(256) NOT NULL
    );
`)
  .then(
    () => console.log('created tables completed'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });