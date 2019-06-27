const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

//1st require routes, 2nd use the routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// When Users visit these roots URL, specific routes will be used
app.use('https://exercise-track.herokuapp.com/exercises', exercisesRouter)
app.use('https://exercise-track.herokuapp.com/users', usersRouter)

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})

//! Excess Codes
// const mongoose = require('mongoose');
// require('dotenv').config();
// const port = process.env.PORT || 5000;

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })