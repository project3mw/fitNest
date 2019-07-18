const { Schema, model } = require('mongoose')

const db = {
  User: require('./User.js')(Schema, model),
  Nest: require('./Nest.js')(Schema, model),
  Plan: require('./Plan.js')(Schema, model),
  Workout: require('./Workout.js')(Schema, model),
  Post: require('./Post.js')(Schema, model)
}

module.exports = db