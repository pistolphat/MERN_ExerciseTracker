const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

//more fields with different data types

const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true }
}, {
  timestamps: true,
})

//creating schema model and exporting it as Exercise
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;