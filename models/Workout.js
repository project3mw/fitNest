module.exports = (Schema, model) => {
  const Workout = new Schema({
      name: String, 
      group: String,
      intensity: {
        type: Number,
        min: 1,
        max: 5
      }, 
      time: String,
      favorite: Boolean,
      creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      description: {
        type: String,
        match: /[a-z]/
      }
  })

  return model('Workout', Workout)
}