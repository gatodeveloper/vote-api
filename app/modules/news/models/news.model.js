var mongoose = require('../../../init/db').mongoose;

var Schema = mongoose.Schema;

var schema = new Schema({
  title:  String,
  description: String,
  category: String,
  imageFeature: String,
  createAt: { type: Date, default: Date.now },
  votes: {
    up: Number,
    down:  Number
  }
});

module.exports = mongoose.model('News', schema);