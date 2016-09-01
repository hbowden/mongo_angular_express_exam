var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: { type: String, required: true},
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  city: { type: String, required: true},
  power: { type: String, required: true}
});

var heroes = mongoose.model('Heroes', heroSchema);

module.exports = heroes;
