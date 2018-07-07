const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const cors = require('cors');
const db = require('../db/index.js');

const app = express();
// app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/../public')));

app.post('/query/run', (req, res) => {
  console.log('querying...' + req.body.query);

  db.query(req.body.query, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/query/saved/:id', (req, res) => {
  // retrieves saved query and returns it to the front end
});

app.post('/query/saved', (req, res) => {
  // saves query to db and returns the assigned id
  // changes url to display new id
});

app.listen(3000, () => console.log('listening on port 3000'));
