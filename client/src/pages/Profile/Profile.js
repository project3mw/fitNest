import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Barbell from '../../assets/images/Barbell.png';
import Cardio from '../../assets/images/Cardio.png';
import Muscle from '../../assets/images/Muscle.png';
import Arnold from '../../assets/images/arnold.png';
import BMI from '../../assets/images/BMI.gif';
import Goal from '../../assets/images/goal.jpg';
// import launchIcon from '@material-ui/icons/Launch';
import { CardActions } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from 'react-router-dom';
import './profile.css'
import NavBar from '../../components/navbar'
// import '../../components/navbar/NavBar.js'
import BottomNavigation from "@material-ui/core/BottomNavigation";


const styles = theme => ({
  
  card: {
    display: 'flex',
    borderRadius: '20px',
    width: '80%',
    margin: '0 auto'
    // marginHorizontal: 0,
    // margin: '0 auto'
  },
  // details: {
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
  content: {
    flex: '1 0 auto',
    // paddingLeft: "20px",
  },
  cover: {
    width: 350,
    // 
    alignContent: "center",
  },
  plans: {
    // marginLeft: "40px",
    // marginBottom: "100px",
    // marginRight: "40px"
  }, 
  button: {
    color: "blue",
  }, 
  details: {
    textAlign: "left", 
    // backgroundColor: 'white',

  },
  details2: {
    textAlign: "center", 
    // backgroundColor: 'orange',
    // opacity: 0.3,
    marginTop: '-30px',
    marginLeft: '-20px',
    marginRight: '-20px',
    color: 'white',
    height: 'auto'
    // borderRadius: '50px',

  }
});

// class SearchResults extends Component {
//   render() {
//     const { classes } = this.props

//     return (

    class Profile extends Component {
        state = {
          toResults: false,
        }
      
        handleSubmit = () => {
          this.setState(() => ({
            toResults: true
          }))
        }
      
        render() {
          if (this.state.toResults === true) {
            return <Redirect to='/WorkoutPlanList2' />
          }
          const { classes } = this.props
          return (
      <>
        <div style={{ marginTop: '30px', }}>
          {/* <h3 style={{ textAlign: 'center', color: '#ffffff' }}>My Profile</h3> */}
        </div>
        <div className={classes.plans}>

          <Card className={classes.card} backgroundImage={Arnold}>
            <div style={{ textAlign: 'left', color: "black"}} className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h4" variant="h4">
                 <b> Welcome, Arnold</b> 
          </Typography>
                <Typography variant="subtitle1" color="texSecondary">
                 <p><b> Name:</b> Arnold</p>
                  <p><b>Username:</b> Arnie1233</p>
                  <p><b>Email:</b> governator1@gmail.com</p>
          </Typography>
                </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={Arnold}
              title="Workout Plan 1"
            />
            {/* <CardActions>
            <IconButton aria-label="View Workouts" className={classes.button} onClick={this.handleSubmit}>
          <launchIcon /></IconButton></CardActions> */}
          </Card>
          <br />
 {/* <Card className={classes.card}> */}
            <div className={classes.details2}>
              <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                  <b>Current Stats:</b>
                  <p><b>Age:</b> 71</p>
                  <p><b>Gender:</b> Male</p>
                  <p><b>Height:</b> 6'2"</p>
          </Typography>
                 </CardContent>
            {/* <CardMedia
              className={classes.cover}
              image={BMI}
              title="Current Stats"
            /> */}
          {/* <Card className={classes.card}> */}
            {/* <div className={classes.details2}> */}
              <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                  <b>Goals:</b>
                  <p>Starting Weight: 249lbs</p>
                  {/* <p><b>Current Weight:</b> 232lbs</p> */}
                  <p>Goal Weight: 225lbs</p>
          </Typography>
                
              </CardContent>
              <div className={classes.controls}>
              </div>
            {/* </div> */}
            {/* <CardMedia
              className={classes.cover}
              image={Goal}
              title="My Workout Plan 3"
            /> */}
            {/* <CardActions>
            <IconButton aria-label="View Workout Plan">
            <launchIcon />
          </IconButton></CardActions> */}
          {/* </Card> */}
          {/* <br />
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Rolex Watch
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  $3,000
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  You would never be late again & so fancy!
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={Rolex}
              title="Gift"
            />
            <CardActions>
            <IconButton aria-label="Add to Wishlist">
          <FavoriteIcon /></IconButton></CardActions>
          </Card>
          <br />
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Apron
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  $15
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Inexpensive and useful gift for the cooks!
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={Apron}
              title="Gift"
            />
            <CardActions>
            <IconButton aria-label="Add to Wishlist">
          <FavoriteIcon /></IconButton></CardActions>
          </Card>
          */}
        </div >
        </div >
<NavBar style={{position: 'fixed', marginLeft: '-50px'}}/>
      </>
    )
  }
}

export default withStyles(styles)(Profile)