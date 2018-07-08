const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection('mongodb://localhost:27017/lasso');
autoIncrement.initialize(connection);

const QuerySchema = mongoose.Schema({
  title: String,
  description: String,
  query: String,
});
QuerySchema.plugin(autoIncrement.plugin, 'Query');
const Query = connection.model('Query', QuerySchema);

module.exports.addQuery = (newQuery, callback) => {
  Query.create(newQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports.retrieveQuery = (id, callback) => {
  Query.findById(id, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports.updateQuery = (id, update, callback) => {
  Query.findByIdAndUpdate(id, update, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};
