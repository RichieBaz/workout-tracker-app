const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// READ all workouts
router.get('/', async (req, res) => {
  const workouts = await Workout.find();
  res.render('workouts/list', { workouts });
});

// Create form page
router.get('/new', (req, res) => {
  res.render('workouts/new');
});

// Create - POST
router.post('/', async (req, res) => {
  console.log(" Received form data:", req.body);
  
  try {
    const { title, sets, reps } = req.body;
    const newWorkout = await Workout.create({ title, sets, reps });
    console.log(" Saved workout:", newWorkout);
  } catch (error) {
    console.error(" ERROR saving workout:", error);
  }

  res.redirect('/workouts');
});



// Edit form page
router.get('/:id/edit', async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  res.render('workouts/edit', { workout });
});

// Update
router.put('/:id', async (req, res) => {
  const { title, sets, reps } = req.body;
  await Workout.findByIdAndUpdate(req.params.id, { title, sets, reps });
  res.redirect('/workouts');
});

// Delete confirm page
router.get('/:id/delete', async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  res.render('workouts/delete', { workout });
});
// Update - PUT
router.put('/:id', async (req, res) => {
    try {
        const { title, sets, reps } = req.body;
        await Workout.findByIdAndUpdate(req.params.id, { title, sets, reps });
        res.redirect('/workouts');
    } catch (error) {
        console.log(error);
        res.send("Update Failed");
    }
});


// Delete
router.delete('/:id', async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.redirect('/workouts');
});

module.exports = router;
