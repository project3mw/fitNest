module.exports = (Schema, model) => {
  const Plan = new Schema({
      name: {
        type: String,
        required: true
      }, 
      workouts: [{
        type: Schema.Types.ObjectId,
        ref: 'Workout'
      }],
      focus: [{
        type: String,
        required: true,
        enum: ['Abs','Legs','Shoulders','Back','Biceps','Chest','Triceps','Calves']
      }],
      goal: {
        type: String,
        required: true
      },
      creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
  })

  return model('Plan', Plan)
}