const { Client } = require('pg');

const client = new Client({
  // this will be generated dynamically in the future
  database: 'Natalie',
  host: 'localhost',
  port: '5432',
});

client.connect();

module.exports.query = function getQueryResults(userQuery, callback) {
  client.query(userQuery, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
