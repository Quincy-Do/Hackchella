
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organizationSchema = new Schema({
  name:           String,
  addres:         String,
  type:           String,
  totalDonations: Number,
  totalValue:     Number,
  totalCent:      Number
});

module.exports = mongoose.model('organization', organizationSchema);
