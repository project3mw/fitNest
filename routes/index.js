module.exports = app => {
  require('./workoutRoutes.js')(app)
  require('./userRoutes.js')(app)
  require('./nestRoutes.js')(app)
  require('./planRoutes.js')(app)
  require('./postRoutes.js')(app)
}

