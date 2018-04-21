
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nonprofitSchema = new Schema({
  name:     String,
  address:  String,
  zipcode:  Number,

});

module.exports = mongoose.model('nonprofit', nonprofitSchema);
