const { User } = require('../models')
const jwt = require('jsonwebtoken')
const passport = require('passport')

module.exports = app => {
  app.post('/verify',passport.authenticate('jwt', {session: false }),(req,res) => res.sendStatus(200))

  app.post('/register',(req,res) => {
    User.register(new User({
      name:req.body.name,
      username:req.body.username,
      email: req.body.email,
      age:req.body.age,
      gender: req.body.gender,
      location: req.body.location,
      height: req.body.height,
      weight: req.body.weight,
      gWeight: req.body.gWeight,
      userImg: req.body.userImg,
      fitLevel: req.body.fitLevel
    }), req.body.password,e => {
      if(e) throw e
      User.authenticate()(req.body.username,
      req.body.password, (e,user) => {
      if (e) throw e
      res.json({ isLoggedIn: !!user, user: user.username,
      token: jwt.sign({ id: user._id},'fitnest')
      })
      })
    })
    // }),req.body.password, (e,user)=> {
      // if (e) console.log(e)
      // res.json(user)
    // })
  })
  app.post('/login',(req,res) => {
    User.authenticate()(req.body.username,
      req.body.password, (e,user) => {
      if (e) throw e
      res.json({ isLoggedIn: !!user,user: user.username,
      token: jwt.sign({ id: user._id},'fitnest')
      })
      })
  })
  //  Get user by id
  app.get('/users/:id', (req, res) => {
    User.findById({_id: req.params.id})
      .then(users => res.json(users))
      .catch(e => console.log(e))
  })

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