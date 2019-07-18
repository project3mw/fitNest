const express = require('express')
const { join } = require('path')
const app = express()
require("dotenv").config()


app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

require('mongoose').connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
 .then(_ => {
   console.log("database connected")
   app.listen(3001, () => console.log('server listening on port: 3001'))
 })
 .catch(function(err) {
 console.log(err.message);
 });