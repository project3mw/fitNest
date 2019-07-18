module.exports = app => {

    require('./Login.js')(app)
    require('./FriendList.js')(app)
    require('./NestList.js')(app)
    require('./Create.js')(app)
    require('./WorkoutPlanList.js')(app)
    require('./Profile.js')(app)
}

