import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
// import WorkoutPlanList from './pages/WorkoutPlanList'
import Profile from './pages/Profile'
// import NestList from './pages/NestList'
// import FriendList from './pages/FriendList'
// import Create from './pages/Create'
import ProfileTop from './components/ProfileTop'
import NavBar from './components/navbar/NavBar.js'
import TopNav from './components/TopNav'
// import Stacks from './utils/Stacks.js'
import './App.css';
import Profile2 from './pages/Profile/Profile2.js'


class App extends Component {
  render () {
    // Stacks.getStacks()
    // .then(({ data }) => console.log(data))
    // .catch(e=> console.error(e))

    return (
      
      <Router>
        <div>
          <TopNav />
          <Profile2/>
      {/* <Route exact path='/' component={Login} />
          <Route path='/Create' component={Create} />
          <Route path='/NestList' component={NestList} />
          <Route path='/FriendList' component={FriendList} />
          <Route path='/WorkoutPlanList' component={WorkoutPlanList} /> */}
          <Route exact path='/Profile' component={_ => <ProfileTop />} />
          <ProfileTop />
        <NavBar />
        </div>    
      </Router>

    )
  }
}

export default App

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ProfileTop from './components/ProfileTop'

// function App() {
//   return (
//     <>
//    <ProfileTop/>
//    </>
//   );
// }

// export default App;