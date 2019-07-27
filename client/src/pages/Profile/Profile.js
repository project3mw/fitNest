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
import launchIcon from '@material-ui/icons/Launch';
import { CardActions } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from 'react-router-dom';



const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: '1 0 auto',
    paddingLeft: "20px",
  },
  cover: {
    width: 150,
  },
  plans: {
    marginLeft: "40px",
    marginBottom: "100px",
    marginRight: "40px"
  }, 
  button: {
    color: "blue",
  }, 
  details: {
    textAlign: "left", 

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
        <div style={{ marginTop: '30px' }}>
          <h1 style={{ textAlign: 'center', color: '#ffffff' }}>My Profile</h1>
        </div>
        <div className={classes.plans}>

          <Card className={classes.card}>
            <div style={{ textAlign: 'left', color: "black"}} className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h4" variant="h4">
                 <b><u> Arnold's Profile</u></b>
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
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
            <CardActions>
            <IconButton aria-label="View Workouts" className={classes.button} onClick={this.handleSubmit}>
          <launchIcon /></IconButton></CardActions>
          </Card>
          <br />
 <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                  <b><u>Current Stats:</u></b>
                  <p><b>Age:</b> 71</p>
                  <p><b>Gender:</b> Male</p>
                  <p><b>Height:</b> 6'2"</p>
          </Typography>
                 </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={BMI}
              title="Current Stats"
            />
            </Card>
          <br />
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                  <b><u>Goals:</u></b>
                  <p><b>Starting Weight:</b> 249lbs</p>
                  <p><b>Current Weight:</b> 232lbs</p>
                  <p><b>Goal Weight:</b> 225lbs</p>
          </Typography>
                
              </CardContent>
              <div className={classes.controls}>
              </div>
            </div>
            <CardMedia
              className={classes.cover}
              image={Goal}
              title="My Workout Plan 3"
            />
            <CardActions>
            <IconButton aria-label="View Workout Plan">
            <launchIcon />
          </IconButton></CardActions>
          </Card>
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
      </>

    )
  }
}

export default withStyles(styles)(Profile)