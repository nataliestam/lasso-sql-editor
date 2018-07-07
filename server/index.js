const express = require('express');
const path = require('path');

const app = express();
app.use('/', express.static(path.join(__dirname, '/../public')));

app.get('/query/run', (req, res) => {
  
});

app.get('/query/saved/:id', (req, res) => {
  // retrieves saved query and returns it to the front end
});

app.post('/query/saved', (req, res) => {
  // saves query to db and returns the assigned id
  // changes url to display new id
});

app.listen(3000, () => console.log('listening on port 3000'));