import React, { useState, useEffect,useRef } from 'react'
// import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import jwt from 'jsonwebtoken'
// import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import './Login.css'
import logo from '../../white_logo.png'



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      color: '#FFE6D0',
      // textDecoration: 'none'
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // logo: {
  //   // margin: theme.spacing(1),
  //   // backgroundColor: theme.palette.secondary.main,
  // },
  form: {
    width: '100%', 
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
}));

// const styles = theme => ({
//   loginForm: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     opacity: '0.8'
//   },
//   h1: {
//     color: '#FFE6D0'
//   }
// })

const Login = _ => {
  console.log(_)
  const _username = useRef()
  const _password = useRef()

  const [userState,setUserState] = useState({
    isLoggedIn: false,
    user: ''
  })
  userState.handleLogInUser = event => {
    event.preventDefault()
    // console.log(_username.current.value,_password.current.value)
    axios.post('/login', {
      username: _username.current.value,
      password: _password.current.value
    })
      .then(({ data }) => {
        if (data.isLoggedIn) {
          const { id } = jwt.verify(data.token, 'fitnest')
          localStorage.setItem('userId', id)
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', data.user)
          setUserState({ ...userState, isLoggedIn: data.isLoggedIn, user: data.user })
          _.history.push('/profiletop')
        } else {
          alert('Invalid username or password')
        }
      })
      .catch(e => console.error(e))
  }

  useEffect(_ => {
    axios.post('/verify', {}, {
      headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
    })
      // .then(_ => console.log('you are signed in.'))
      // .catch(_ => console.log('Unauthorized user.'))
      .then(_ => {
        setUserState({ ...userState, isLoggedIn: true, user: localStorage.getItem('user') })
      })
      .catch(_ => {
        setUserState({ ...userState, isLoggedIn: false, user: '' })
      })
  }, [userState])
//   return(
//     <div id="loginForm">
//       <h1>{userState.isLoggedIn ? `Hello ${userState.user}! Welcome to the app!` : 'Please Log In Below.'}</h1>
//       <form>
//         <p>
//           <label htmlFor="username">username</ label>
//           <br />
//           <input type="text" ref={_username}/>
//         </p>
//         <p>
//           <label htmlFor="password">password</label>
//           <br />
//           <input type="text" ref={_password}/>
//         </p>
//         <p>
//           <Button onClick={userState.handleLogInUser}>Log In</Button>
//         </p>
//       </form>
//     </div>
//   )
// }
 
const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <div className={classes.logoDiv}>
      {/* <img src={logo} className={classes.appLogo} alt="logo"/> */}
      <img className={classes.logo} src={logo} id="appLogo" alt="logo" style={{width: 180, height: 'auto', marginBottom: 20}}/>
      </div>
          {/* <LockOutlinedIcon /> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} validate color='primary'>
          <TextField className={classes.text}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            color='secondary'
          />
          <FormControlLabel
            control={<Checkbox value="remember" style={{color: '#FFE6D0'}} />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{color: 'white', textDecoration: 'none'}}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item >
              <Link to='/SignUp' variant="body2" style={{color: 'white', textDecoration: 'none'}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}
export default Login