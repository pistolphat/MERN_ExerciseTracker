const mongoose = require('mongoose')

// MLABS_URL
// mongodb://user123:user123@ds243717.mlab.com:43717/exercise_tracker

// Setup to connect local database
if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/exercise_db', { useNewUrlParser: true, useCreateIndex: true });
}

// After successfull connection, clg 'success message'
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

mongoose.Promise = Promise

module.exports = mongoose