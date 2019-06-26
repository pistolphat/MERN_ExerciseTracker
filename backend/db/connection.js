const mongoose = require('mongoose')

// Setup to connect local database
mongoose.connect('mongodb://localhost/exercise_db', { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;


// After successfull connection, clg 'success'
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

mongoose.Promise = Promise

module.exports = mongoose