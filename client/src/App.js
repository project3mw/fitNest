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
import NavBar from './components/navbar/NavBar'
import TopNav from './components/TopNav'
// import Stacks from './utils/Stacks.js'
import './App.css';
import Profile from './pages/Profile/Profile.js'
import WorkoutPlanList from './pages/WorkoutPlanList'
import PlanExercises from './pages/PlanExercises'


class App extends Component {
  // renderRedirect = () =>{
  //   console.log("Redirecting")
    //Redirect to
  // }
  render () {
    // Stacks.getStacks()
    // .then(({ data }) => console.log(data))
    // .catch(e=> console.error(e)

    const App = _ => {
    return (
      <Router>
        {/* <div> */}

         
       {/* {this.loggedin ? this.renderRedirect : console.log("not redirecting") } */}


          {/* <TopNav /> */}
      
          {/* <WorkoutPlanList2 /> */}
      <Route exact path='/' component={_ => <Login />} />
      <Route exact path='/Login' component={_ => <Login />} />
      <Route exact path='/SignUp' component={_ => <SignUp />} />
      <Route exact path='/ProfileReg' component={_ => <Regform />} />
      <Route exact path='/Profile' component={_ => <Profile />} />
      <Route exact path='/PlanForm' component={_ => <PlanForm />} />
      {/* <RegForm/> */}
       
        {/* </div>     */}
<PlanExercises />
          <Route exact path='/exerciselist' component={ExerciseList} />
          {/* <Route exact path='/Profile' component={_ => <Profile />} /> */}
       

      {/* <Regform/> */}
        {/* <Login/> */}
      <NavBar />
        </div>    
      </Router>

    )
  }
export default App


















