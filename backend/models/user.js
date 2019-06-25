//require mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Only one field with validations
const userSchema = new Schema ({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true, //trim whitespaces
    minlength: 3
  },
}, {
  timestamps: true,
});


const User = mongoose.model('User', userSchema);

module.exports = User;