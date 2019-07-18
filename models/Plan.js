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
        enum: ['abs','legs','shoulders','back','biceps','chest','triceps','all']
      }]
      goal: {
        type: String,
        required: true
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
  })

  return model('Plan', Plan)
}