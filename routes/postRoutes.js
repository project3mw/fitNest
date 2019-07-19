const { Post } = require('../models')

module.exports = app => {
  app.get('/posts', (req, res) => {
    Post.find({})
      .then(posts => res.json(posts))
      .catch(e => console.log(e))
  })
  app.post('/posts', (req, res) => {
    Post.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}