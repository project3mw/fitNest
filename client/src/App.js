import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react'
import Login from './pages/Login'
import Profile from './pages/Profile'
// import Logo from './assets/images/nest.svg'
// import ProfileTop from './components/ProfileTop'
// import TopNav from './components/TopNav'
import SignUp from './pages/SignUp'
import './App.css';
import Regform from './components/Regform'
import NavBar from './components/navbar';
import { makeStyles } from '@material-ui/core/styles'
// import Stacks from './utils/Stacks.js'
import ExerciseList from './pages/ExerciseList'
// import WorkoutPlanList from './pages/WorkoutPlanList'
// import NestList from './pages/NestList'
// import FriendList from './pages/FriendList'
// import Create from './pages/Create'
import PlanForm from './pages/PlanForm'
// import Profile2 from './pages/Profile/Profile2.js'
import WorkoutPlanList2 from './pages/WorkoutPlanList2'
import TopNav from './components/TopNav'
// import Stacks from './utils/Stacks.js'
import './App.css';
import PlanExercises from './pages/PlanExercises'
import { Switch } from '@material-ui/core';


    const App = _ => {
    return (
      <Router>
      <Route exact path='/' component={_ => <Login />} />
      <Route exact path='/Login' component={_ => <Login />} />
      <Route exact path='/SignUp' component={_ => <SignUp />} />
      <Route exact path='/ProfileReg' component={_ => <Regform />} />
      <Route exact path='/Profile' component={_ => <Profile />} />
      <Route exact path='/PlanForm' component={_ => <PlanForm />} />
      <Route exact path='/Exerciselist' component={_ => <ExerciseList />} />
      <Route exact path='/WP' component={_ => <WorkoutPlanList2 />} />
      <Route exact path='/PlanExercises' component={_ => <PlanExercises />} />
      </Router>
  )
  }
  
export default App


















