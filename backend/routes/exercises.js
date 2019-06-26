const router = require('express').Router();
let Exercise = require('../models/exercise');

// Get requests at exercise/, Find() all Exercises
router.route('/').get((req, res) => {
  Exercise.find()
    .then (exercises => res.json(exercises))
    .catch (err => res.status(400).json('Error: ' + err));
});

// Post requests at exercise/add to add new Exercises
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  // Save the new exercise with Promises
  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;