const mongoose = require('mongoose');
const { Schema } = mongoose;

const elementsSchema = new Schema({
  name: String,
  description: String,
  atomicNumber: Number,
  mass: Number,
  abbreviation: String
});

const elementsModel = mongoose.model('elements', elementsSchema)
module.exports = elementsModel