module.exports = (Schema, model) => {
  const Workout = new Schema({
      name: {
        type: String,
        match: /[a-z]/
      }, 
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
      creatorName: {
        type: String,
        match: /[a-z]/
      },
      description: {
        type: String,
        match: /[a-z]/
      },
      notes: {
        type: String,
        match: /[a-z]/
      }
  })

  return model('Workout', Workout)
}