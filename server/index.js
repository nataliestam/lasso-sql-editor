const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const userdb = require('../db/postgres-client.js');

const app = express();
app.use(bodyParser.json());
app.use('/query', express.static(path.join(__dirname, '/../public')));
app.use('/query/:id', express.static(path.join(__dirname, '/../public')));

// queries to user specified db
app.post('/query/run', (req, res) => {
  userdb.query(req.body.query, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      const columns = Object.keys(results.rows[0]);
      const data = results.rows.map((row) => {
        const storage = [];
        columns.forEach(col => storage.push(row[col]));
        return storage;
      });
      res.status(200).send({ columns, data });
    }
  });
});

// queries to application db
app.get('/query/saved/:id', (req, res) => {
  db.retrieveQuery(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/query/saved', (req, res) => {
  db.addQuery(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.put('/query/saved/:id', (req, res) => {
  // updates an existing query and returns
});

app.listen(3000, () => console.log('listening on port 3000'));
