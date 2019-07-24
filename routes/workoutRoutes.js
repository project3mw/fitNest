const { Workout } = require('../models')

module.exports = app => {

  app.get('/workouts', (req, res) => {
    Workout.find({})
      .then(workouts => res.json(workouts))
      .catch(e => console.log(e))
  })
  app.get('/favorites', (req, res) => {
    Workout.find({ favorite: true })
      .then(workouts => res.json(workouts))
      .catch(e => console.log(e))
  })
  app.get('/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { favorite: true })
     .then(_ => res.sendStatus(200))
     .catch(e => console.log(e))
    })
  app.post('/workouts', (req, res) => {
    Workout.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}