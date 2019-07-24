import React, { useState, useEffect,useRef } from 'react'
import axios from 'axios'

const RegForm = _ => {
  const name = useRef()
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const age = useRef()
  const gender = useRef()
  const location = useRef()
  const height = useRef()
  const weight = useRef()
  const gWeight = useRef()
  // const userImg = useRef()
  const fitLevel = useRef()
  

  const [userState,setUserState] = useState({
    isLoggedIn: false,
    user: ''
  })

  userState.handleRegisterUser = event => {
    event.preventDefault()
    console.log(name.current.value,username.current.value)
    axios.post('/register', {
      name: name.current.value,
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      age: age.current.value,
      gender: gender.current.value,
      location: location.current.value,
      height: height.current.value,
      weight: weight.current.value,
      gWeight: gWeight.current.value,
      // userImg: userImage.current.value,
      fitLevel: fitLevel.current.value
      })
      .then(({ data }) => {
        if (data.isLoggedIn) {
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', data.user)
          setUserState({ ...userState, isLoggedIn: data.isLoggedIn, user: data.user })
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
  },[])
  
  return(
    <div>
      <form>
        <p>
          <label htmlFor="name">name</label>
          <br />
          <input type="text" ref={name} />
        </p>
        <p>
          <label htmlFor="username">username</label>
          <br />
          <input type="text" ref={username} />
        </p>
        <p>
          <label htmlFor="email">email</label>
          <br />
          <input type="text" ref={email}/>
        </p>
        <p>
          <label htmlFor="password">password</label>
          <br />
          <input type="text" ref={password} />
        </p>
        <p>
          <label htmlFor="age">age</label>
          <br />
          <input type="text" ref={age} />
        </p>
        <p>
          <label htmlFor="gender">gender</label>
          <br />
          <input type="text" ref={gender} />
        </p>
        <p>
          <label htmlFor="location">location</label>
          <br />
          <input type="text" ref={location} />
        </p>
        <p>
          <label htmlFor="height">height</label>
          <br />
          <input type="text" ref={height} />
        </p>
        <p>
          <label htmlFor="weight">weight</label>
          <br />
          <input type="text" ref={weight} />
        </p>
        <p>
          <label htmlFor="gWeight">gWeight</label>
          <br />
          <input type="text" ref={gWeight} />
        </p>
        {/* <p>
          <label htmlFor="userImg">userImg</label>
          <br />
          <input type="text" ref={userImg} />
        </p> */}
        <p>
          <label htmlFor="fitLevel">fitLevel</label>
          <br />
          <input type="text" ref={fitLevel} />
        </p>
        <p>
          <button onClick={userState.handleRegisterUser} >Register</button>
        </p>
      </form>
    </div>
  )
}

export default RegForm