module.exports = (Schema, model) => {
  const Post = new Schema({
      body: {
        type: String,
        minlength: 10,
        maxlength: 150
      },
      creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      userThumb: String
  })
  
  return model('Post', Post)
}