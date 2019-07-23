module.exports = (Schema, model) => {
  const User = new Schema({
      email: {
        type: String,
        validate: {
          validator: function (string) {
            return string.includes("@")
          }, 
          message: 'You Must Enter A Valid Email Address!'
        },
        required: true
      },
      name: {
        type: String,
        match: /[a-z]/,
        minlength: 3,
        maxlength: 20,
        required: true
      },
      age: {
        type: Number,
        min: 10,
        max: 120,
        required: true
      },
      gender: String,
      location: String,
      height: String,
      weight: Number,
      gWeight: Number,
      userImg: String,
      fitLevel: {
        type: Number,
        min: 1,
        max: 3
      },
      friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }]
  })

  User.plugin(require('passport-local-mongoose'))

  return model('User', User)
}