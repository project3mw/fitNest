const { Plan } = require('../models')

module.exports = app => {
  app.get('/plans', (req, res) => {
    Plan.find({})
      .then(plans => res.json(plans))
      .catch(e => console.log(e))
  })
  app.post('/plans', (req, res) => {
    Plan.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}