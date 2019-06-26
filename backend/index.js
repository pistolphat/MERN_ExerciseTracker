const express = require('express');
const cors = require('cors')
// const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

//1st require routes, 2nd use the routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// When Users visit these roots URL, specific routes will be used
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})