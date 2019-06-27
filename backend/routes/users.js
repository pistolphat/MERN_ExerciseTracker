const router = require('express').Router();
let User = require('../models/user')

// const express = require('express')
// const router = express.Router()

// Get requests from Homepage
// Find() method with Promises
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
});

// Get request per ID params
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err))
})

// New Post requests.
// Create new instance of a new User, then Save.
router.route('/add').post((req, res) => {
  const username = req.body.username;

// creating new instance
  const newUser = new User({username});

  // save method for the database
  newUser.save()
    .then(() => res.json('User Added!'))
    .catch (err => res.status(400).json('Error: ' + err))
});

// Delete User per ID params
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then(() => res.json('User Deleted.'))
  .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router