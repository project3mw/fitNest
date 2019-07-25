import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Regform from './components/RegForm'
import React, { Component } from 'react'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProfileTop from './components/ProfileTop'
import TopNav from './components/TopNav'
import SignUp from './pages/SignUp'
import './App.css';
import RegForm from './components/RegForm';
import NavBar from './components/navbar';
import { makeStyles } from '@material-ui/core/styles'
// import Stacks from './utils/Stacks.js'
// import WorkoutPlanList from './pages/WorkoutPlanList'
// import NestList from './pages/NestList'
// import FriendList from './pages/FriendList'
// import Create from './pages/Create'
// import Profile2 from './pages/Profile/Profile2.js'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      color: '#FFE6D0',
      textDecoration: 'none'
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  text: {
    color: 'white'
  },
  muiFormControlRoot: {
    color: 'white'
  }
}))
    const App = _ => {
      const classes = useStyles()
    return (
      
      <Router>
        <div>

         
       {/* {this.loggedin ? this.renderRedirect : console.log("not redirecting") } */}


          <TopNav />
      

      <Route exact path='/' component={_ => <Login />} />
      <Route exact path='/Login' component={_ => <Login />} />
      <Route exact path='/SignUp' component={_ => <SignUp />} />
      <Route exact path='/ProfileReg' component={_ => <RegForm />} />
      <Route exact path='/Profile' component={_ => <Profile />} />
<NavBar />
      {/* <Regform/> */}
      
        </div>    
      </Router>

    )
  }
export default App


























// import React, { useState, useEffect,useRef } from 'react'
// import axios from 'axios'

// const App = _ => {
//   const name = useRef()
//   const username = useRef()
//   const email = useRef()
//   const password = useRef()
//   const age = useRef()
//   const gender = useRef()
//   const location = useRef()
//   const height = useRef()
//   const weight = useRef()
//   const gWeight = useRef()
//   // const userImg = useRef()
//   const fitLevel = useRef()
//   const _username = useRef()
//   const _password = useRef()

//   const [userState,setUserState] = useState({
//     isLoggedIn: false,
//     user: ''
//   })

//   userState.handleRegisterUser = event => {
//     event.preventDefault()
//     // console.log(name.current.value,username.current.value)
//     axios.post('/register', {
//       name: name.current.value,
//       username: username.current.value,
//       email: email.current.value,
//       password: password.current.value,
//       age: age.current.value,
//       gender: gender.current.value,
//       location: location.current.value,
//       height: height.current.value,
//       weight: weight.current.value,
//       gWeight: gWeight.current.value,
//       // userImg: userImage.current.value,
//       fitLevel: fitLevel.current.value
//       })
//       .then(({ data }) => {
//         if (data.isLoggedIn) {
//           localStorage.setItem('token', data.token)
//           localStorage.setItem('user', data.user)
//           setUserState({ ...userState, isLoggedIn: data.isLoggedIn, user: data.user })
//         }
//       })
//       .catch(e => console.error(e))
//   }

//   userState.handleLogInUser = event => {
//     event.preventDefault()
//     // console.log(_username.current.value,_password.current.value)
//     axios.post('/login', {
//       username: _username.current.value,
//       password: _password.current.value
//     })
//       .then(({ data }) => {
//         if (data.isLoggedIn) {
//           localStorage.setItem('token', data.token)
//           localStorage.setItem('user', data.user)
//           setUserState({ ...userState, isLoggedIn: data.isLoggedIn, user: data.user })
//         } else {
//           alert('Invalid username or password')
//         }
//       })
//       .catch(e => console.error(e))
//   }

//   useEffect(_ => {
//     axios.post('/verify', {}, {
//       headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
//     })
//       // .then(_ => console.log('you are signed in.'))
//       // .catch(_ => console.log('Unauthorized user.'))
//       .then(_ => {
//         setUserState({ ...userState, isLoggedIn: true, user: localStorage.getItem('user') })
//       })
//       .catch(_ => {
//         setUserState({ ...userState, isLoggedIn: false, user: '' })
//       })
//   }, [])
//   return(
//     <div>
//       <h1>Logged in</h1>
//       <h1>{userState.isLoggedIn ? `Hello ${userState.user}! Welcome to the app!` : 'Please Log In Below.'}</h1>
//       <form>
//         <p>
//           <label htmlFor="name">name</label>
//           <br />
//           <input type="text" ref={name} />
//         </p>
//         <p>
//           <label htmlFor="username">username</label>
//           <br />
//           <input type="text" ref={username} />
//         </p>
//         <p>
//           <label htmlFor="email">email</label>
//           <br />
//           <input type="text" ref={email}/>
//         </p>
//         <p>
//           <label htmlFor="password">password</label>
//           <br />
//           <input type="text" ref={password} />
//         </p>
//         <p>
//           <label htmlFor="age">age</label>
//           <br />
//           <input type="text" ref={age} />
//         </p>
//         <p>
//           <label htmlFor="gender">gender</label>
//           <br />
//           <input type="text" ref={gender} />
//         </p>
//         <p>
//           <label htmlFor="location">location</label>
//           <br />
//           <input type="text" ref={location} />
//         </p>
//         <p>
//           <label htmlFor="height">height</label>
//           <br />
//           <input type="text" ref={height} />
//         </p>
//         <p>
//           <label htmlFor="weight">weight</label>
//           <br />
//           <input type="text" ref={weight} />
//         </p>
//         <p>
//           <label htmlFor="gWeight">gWeight</label>
//           <br />
//           <input type="text" ref={gWeight} />
//         </p>
//         {/* <p>
//           <label htmlFor="userImg">userImg</label>
//           <br />
//           <input type="text" ref={userImg} />
//         </p> */}
//         <p>
//           <label htmlFor="fitLevel">fitLevel</label>
//           <br />
//           <input type="text" ref={fitLevel} />
//         </p>
//         <p>
//           <button onClick={userState.handleRegisterUser} >Register</button>
//         </p>
//       </form>


//       <form>
//         <p>
//           <label htmlFor="username">username</label>
//           <br />
//           <input type="text" ref={_username}/>
//         </p>
//         <p>
//           <label htmlFor="password">password</label>
//           <br />
//           <input type="text" ref={_password}/>
//         </p>
//         <p>
//           <button onClick={userState.handleLogInUser}>Log In</button>
//         </p>
//       </form>
//     </div>
//   )
// }

// export default App

// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Login from './pages/Login'
// import WorkoutPlanList from './pages/WorkoutPlanList'
// import Profile from './pages/Profile'
// import NestList from './pages/NestList'
// import FriendList from './pages/FriendList'
// import Create from './pages/Create'
// import ProfileTop from './components/ProfileTop'
// import NB from './components/NB'
// import TopNav from './components/topnav'

// class App extends Component {
//   render () {
//     return (
//       <Router>
//         <div>
          // {/* <TopNav /> */}
          // {/* <Route exact path='/' component={Login} />
          // <Route path='/Create' component={Create} />
          // <Route path='/NestList' component={NestList} />
          // <Route path='/FriendList' component={FriendList} />
          // <Route path='/WorkoutPlanList' component={WorkoutPlanList} /> */}
//           <Route path='/Profile' component={ProfileTop} />
//           <ProfileTop />
//           <NB />
//         </div>
//       </Router>
//     )
//   }
// }


// export default App;
