import React, { useState, useEffect,useRef } from 'react'
import RadioButtons from './components/radiobuttons/radiobuttons'
import UploadButton from './components/uploadbutton/uploadbutton'
import './form.css'
import NavBar from '../navbar'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../white_logo.png';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FitnessLevel from '../../components/Regform/components/FitnessLevel/FitnessLevel'
  
    
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
        // avatar: {
        //   margin: theme.spacing(1),
        //   backgroundColor: theme.palette.secondary.main,
        // },
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
      }));
    
    function RegForm() {
      const classes = useStyles();
    
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
          <div className={classes.logoDiv}>
          {/* <img src={logo} className={classes.appLogo} alt="logo"/> */}
          <img className={classes.logo} src={logo} id="appLogo" alt="logo" style={{width: 180, height: 'auto', marginBottom: 40}}/>
          </div>
            <Typography component="h1" variant="h5"style={{marginBottom: 20}}>
              Join the Nest
            </Typography>
            <Grid container justify="flex-end">
                <Grid item>
                  <Link to='/Login' variant="body2" style={{color: 'white', textDecoration: 'none'}}>
                    {"Sign in"}
                  </Link>
                </Grid>
              </Grid>
            <form className={classes.form} validate>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    // autoComplete="Age"
                    name="age"
                    variant="outlined"
                    required
                    fullWidth
                    id="age"
                    label="Age"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="location"
                    label="Zip Code"
                    name="location"
                    // autoComplete="lname"
                  />
                </Grid>
                  <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="sWeight"
                    label="Starting Weight"
                    name="sWeight"
                    // autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="gWeight"
                    label="Goal Weight"
                    name="gWeight"
                    // autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={6}>
                <RadioButtons 
                  fullwidth
                  variant="contained"
                  color='secondary'
                  required 
                  key='radioButton1'
                   />
                </Grid>
                <Grid id='fitLevel' item xs={6}>
                  <FitnessLevel 
                  key='fitLevel' 
                  variant="outlined"
                  />
                  </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign Up
                <Link to='/Profile'/>
              </Button>
            </form>
          </div>
          <Box mt={5}>
          </Box>
        </Container>
      );
    }
    
    

// const RegForm = () => {
//   // console.log(props)
//   return (
//     <Grid id='container' style={{width: '90%', height: '70%'}}>
//       <Grid id='formContainer' container spacing={3} >
//       <Grid id='age' item xs={3}>
//           <TextField value='Age' />
//         </Grid>
//         <Grid id='zipCode' item xs={3}>
//           <ZipCode value='zipCode' />
//         </Grid>
//         <Grid id='radioButtons' item xs={9}>
//           <RadioButtons key='radioButton1' />
//         </Grid>
//         <Grid id='fitLevel' item sm={9}>
//           <FitnessLevel key='fitLevel' />
//         </Grid>
//         <Grid id='zipCode' item xs={6}>
//           <TextField />
//         </Grid>
//         <Grid id='weight' item md={6} >
//           <TextField key='name' value='Starting Weight'/>
//         </Grid>
//         <Grid id='gWeight' item md={6} >
//           <TextField key='name' value='Starting Weight'/>
//         </Grid>
//         <Grid id='name' item md={6} >
//           <Name key='name' />
//         </Grid>
//         <Grid id='form-buttons'>
//           <Grid item xs={6}>
//             <UploadButton />
//           </Grid>
//           <Grid item xs={6}>
//             <Link to="../profile">
//             <Button variant='contained' id='register' style={{textDecoration: 'none'}} >Register</Button>
//             </Link>
//           </Grid>
//         </Grid>
//       </Grid>
//       <NavBar />
//     </Grid>
//   )
  

// }

export default RegForm