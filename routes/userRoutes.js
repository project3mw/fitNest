const { User } = require('../models')

module.exports = app => {
  app.get('/users', (req, res) => {
    User.find({})
      .then(users => res.json(users))
      .catch(e => console.log(e))
  })
  app.post('/users', (req, res) => {
    User.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}