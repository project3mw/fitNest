const { Nest } = require('../models')

module.exports = app => {
  app.get('/nests', (req, res) => {
    Nest.find({})
      .then(nests => res.json(nests))
      .catch(e => console.log(e))
  })
  app.post('/nests', (req, res) => {
    Nest.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}