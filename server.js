const express = require('express')
const { join } = require('path')
const passport = require('passport')
const{ Strategy } = require('passport-local')
const { Strategy: JWTStrategy,ExtractJwt } = require('passport-jwt')
const session = require('express-session')
const {User} = require('./models')
const app = express()
require("dotenv").config()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// app.use(require('express-session')({
//   secret: 'fitnest' ,
//   resave: false,
//   saveUninitialized: false
// }))
app.use(session({
  secret: 'fitnest' ,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/fitnestdb'

passport.use(new Strategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'fitnest'
}, (jwtPayload, cb) => User.findById(jwtPayload.id)
  .then(user => cb(null, user))
  .catch(err => cb(err, null))
))

require('./routes')(app)
app.get('*', (req, res) => res.sendFile(join(__dirname, 'client', 'build')))
require('mongoose').connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
 .then(_ => {
   console.log("database connected")
   app.listen(3001, () => console.log('server listening on port: 3001'))
 })
 .catch(function(err) {
 console.log(err.message);
 });
