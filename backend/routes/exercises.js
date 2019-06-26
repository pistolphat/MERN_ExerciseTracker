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

  // Save the new exercise.
  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

// Get request per ID params
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
  .then(exercises => res.json(exercises))
  .catch(err => res.status(400).json('Error: ' + err))
})

// Delete request per ID params
router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
  .then(() => res.json('Exercise Deleted.'))
  .catch(err => res.status(400).json('Error: ' + err))
})

// Update and save requests
router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;