import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import WorkoutPlanList from './pages/WorkoutPlanList'
import Profile from './pages/Profile'
import NestList from './pages/NestList'
import FriendList from './pages/FriendList'
import Create from './pages/Create'
// import NB from './components/NB'
// import TopNav from './components/topnav'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          {/* <TopNav /> */}
          <Route exact path='/' component={Login} />
          <Route path='/Create' component={Create} />
          <Route path='/NestList' component={NestList} />
          <Route path='/FriendList' component={FriendList} />
          <Route path='/WorkoutPlanList' component={WorkoutPlanList} />
          <Route path='/Profile' component={Profile} />

          {/* <NB /> */}
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
