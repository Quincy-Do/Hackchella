
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
  name: String,
  date: String,
  location: String,
  status: String
});

module.exports = mongoose.model('food', foodSchema);
