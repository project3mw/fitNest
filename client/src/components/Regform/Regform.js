import React, { useState, useEffect,useRef } from 'react'
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
import Name from './components/name'
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
      <Grid id='name' item xs={6}>
          <Name key='dateOfBirth' handleInputChange={props.handleInputChange} handleDateChange={props.handleDateChange} selectedDate={props.dob} />
        </Grid>
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