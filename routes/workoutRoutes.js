const { Workout } = require('../models')

module.exports = app => {

  app.get('/workouts', (req, res) => {
    Workout.find({})
      .then(workouts => res.json(workouts))
      .catch(e => console.log(e))
  })
  app.post('/workouts', (req, res) => {
    Workout.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}