const { Workout } = require('../models')

module.exports = app => {
  // get ALL workouts
  app.get('/workouts', (req, res) => {
    Workout.find({})
      .then(workouts => res.json(workouts))
      .catch(e => console.log(e))
  })
  // get ALL workouts by muscle group
  app.get('/workouts/:muscle', (req, res) => {
    Workout.find({ group: req.params.muscle })
      .then(workouts => res.json(workouts))
      .catch(e => console.log(e))
  })
  // get ALL workouts by 2 muscle groups
  app.get('/workouts/:muscle1/:muscle2', (req, res) => {
    Workout.find({ group: {$in: [req.params.muscle1, req.params.muscle2]} })
      .then(workouts => res.json(workouts))
      .catch(e => console.log(e))
  })
  
  app.post('/workouts', (req, res) => {
    Workout.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}