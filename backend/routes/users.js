const router = require('express').Router();
let User = require('../models/user')

// const express = require('express')
// const router = express.Router()

// Get requests from root + /
// Find() method with Promises
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
});

// Post requests  with /add
// Create new instance of a new User
router.route('/add').post((req, res) => {
  const username = req.body.username;

// creating new instance
  const newUser = new User({username});

  // save method for the database
  newUser.save()
    .then(() => res.json('User Added!'))
    .catch (err => res.status(400).json('Error: ' + err))
});

module.exports = router