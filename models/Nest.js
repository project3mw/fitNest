module.exports = (Schema, model) => {
  const Nest = new Schema({
      name: {
        type: String,
        required: true
      }, 
      members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }],
      plans: [{
        type: Schema.Types.ObjectId,
        ref: 'Plan'
      }], 
      goal: {
        type: String,
        required: true
      },
      posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }],
      admin: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
  })

  return model('Nest', Nest)
}