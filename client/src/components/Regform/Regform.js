// import React, { useState, useEffect,useRef } from 'react'
// import axios from 'axios'

// const RegForm = _ => {
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
  

//   const [userState,setUserState] = useState({
//     isLoggedIn: false,
//     user: ''
//   })

//   userState.handleRegisterUser = event => {
//     event.preventDefault()
//     console.log(name.current.value,username.current.value)
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
//   },[])
  
//   return(
//     <div>
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
//     </div>
//   )
// }


import React, { useState, useEffect,useRef, Component } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import DateofBirth from './components/dateofbirth'
import RadioButtons from './components/radiobuttons/radiobuttons'
import FitnessLevel from './components/FitnessLevel'
import UploadButton from './components/uploadbutton/uploadbutton'
import { Link } from "react-router-dom";
import ZipCode from './components/zipCode/zipCode'
import Grid from '@material-ui/core/Grid'
import './form.css'
// import BioInput from './components/textfield/BioInput'
// import PersonalInterests from './components/personalInterests/personalInterests'

const RegForm = (props) => {
  return (
    <Grid id='container'>
      {/* <h1 id='greeting'>Welcome {props.displayName.split(' ')[0]}!</h1> */}
      <Grid id='formContainer' container spacing={3} >
        <Grid id='dateOfBirth' item xs={6}>
          <DateofBirth key='dateOfBirth' handleInputChange={props.handleInputChange} handleDateChange={props.handleDateChange} selectedDate={props.dob} />
        </Grid>
        <Grid id='radioButtons' item xs={12}>
          <RadioButtons key='radioButton1' handleInputChange={props.handleInputChange} handleChangeRb={props.handleChangeRb} />
        </Grid>
        <Grid id='fitnessLevel' item sm={12}>
          <FitnessLevel key='fitnessLevel' handleInputChange={props.handleInputChange} handleChangefitness={props.handleChangefitness} fitness={props.fitnessLevel} />
        </Grid>
        <Grid id='zipCode' item xs={6}>
          <ZipCode key='zipCode' handleInputChange={props.handleInputChange} handleZipCode={props.handleZipCode} zipCode={props.zipCode} />
        </Grid>
        {/* <Grid id='personalInterests' item md={12}>
          <PersonalInterests key='personalInterestCollection' handleInputChange={props.handleInputChange} handleInterest1={props.handleInterest1} handleInterest2={props.handleInterest2} handleInterest3={props.handleInterest3} int1={props.int1} int2={props.int2} int3={props.int3} />
        </Grid> */}
        {/* <Grid id='name' item md={6} >
          <BioInput key='bioTextfield1' handleInputChange={props.handleInputChange} userBio={props.userBio} />
        </Grid>
        <Grid id='name' item md={6} >
          <BioInput key='bioTextfield1' handleInputChange={props.handleInputChange} userBio={props.userBio} />
        </Grid>
        <Grid id='name' item md={6} >
          <BioInput key='bioTextfield1' handleInputChange={props.handleInputChange} userBio={props.userBio} />
        </Grid> */}
        <div id='form-buttons'>
          <Grid item xs={6}>
            <UploadButton />
          </Grid>
          <Grid item xs={3}>

          {
        props.formCompleted ? (
          <Link to="../profile">
          <Button id='update' variant = 'contained' onClick = {props.updateProfile}>Update</Button>
          </Link>
          
          ) :
          
          (
            <Link to="../profile">
            <Button variant='contained' id='register' onClick={props.storeForm} style={{ textDecoration: 'none' }} >Register</Button>
            </Link>
        )

      }
            
          </Grid>
        </div>
      </Grid>
    </Grid>
  )
}

export default RegForm