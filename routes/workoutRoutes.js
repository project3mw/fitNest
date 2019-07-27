const { Workout } = require('../models')

module.exports = app => {
  // app.get('/exercises', (req, res) => {
  //   axios.get('https://wger.de/api/v2/exercise/?category=14&status=2&language=2')
  //     .then(({ data }) => {
  //       let workouts = data.results.filter(ex => ex.description !== '').map(ex => ({
  //         name: ex.name,
  //         description: ex.description,
  //         notes: '',
  //         group: 'Calves',
  //         intensity: 2,
  //         time: '',
  //         favorite: false,
  //         creator: '5d337f7b68e4752249612d37',
  //         creatorName: 'Admin'
  //       }))
  //       Workout.create(workouts)
  //         .then(_ => res.json(workouts))
  //       // res.json(workouts)
  //     })
  // })

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