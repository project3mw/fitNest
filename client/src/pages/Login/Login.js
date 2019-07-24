import React, { useState, useEffect,useRef } from 'react'
import axios from 'axios'

const Login = _ => {
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
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', data.user)
          setUserState({ ...userState, isLoggedIn: data.isLoggedIn, user: data.user })
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
  }, [])
  return(
    <div>
      <h1>{userState.isLoggedIn ? `Hello ${userState.user}! Welcome to the app!` : 'Please Log In Below.'}</h1>
      <form>
        <p>
          <label htmlFor="username">username</label>
          <br />
          <input type="text" ref={_username}/>
        </p>
        <p>
          <label htmlFor="password">password</label>
          <br />
          <input type="text" ref={_password}/>
        </p>
        <p>
          <button onClick={userState.handleLogInUser}>Log In</button>
        </p>
      </form>
    </div>
  )
}

export default Login