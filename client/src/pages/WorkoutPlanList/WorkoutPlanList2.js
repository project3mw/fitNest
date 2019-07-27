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
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    paddingLeft: "20px",

  },
  cover: {
    width: 'flex',
  },
  plans: {
    marginLeft: "40px",
    marginBottom: "100px",
    marginRight: "40px"
  },
  button: {
    color: "blue",
  }
});

// class SearchResults extends Component {
//   render() {
//     const { classes } = this.props

//     return (

    class WorkoutPlanList2 extends Component {
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
            return <Redirect to='/PlanExercises' />
          }
          const { classes } = this.props
          return (
      <>
        <div style={{ marginTop: '30px' }}>
          <h1 style={{ textAlign: 'center', color: '#ffffff' }}>My Workout Plans</h1>
        </div>
        <div className={classes.plans}>

          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Bulk Up!
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Type of Workouts: Biceps, Arms, Shoulders
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Goal: Get toned and build muscle so I can pick up chicks at the gym!
                 </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={Barbell}
              title="Workout Plan 1"
            />
            <CardActions>
            <IconButton>
            <launchIcon aria-label="View Workouts" className={classes.button} onClick={this.handleSubmit}>
          </launchIcon></IconButton></CardActions>
          </Card>
          <br />
 <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Lean Out!
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Type of Workouts: Abs, Legs, Cardio
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                   Goal: Lose weight to look hot on the beach so I can pick up chicks!
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={Cardio}
              title="My Workout Plan 2"
            /><CardActions>
            <IconButton aria-label="View Workouts">
          <launchIcon /></IconButton></CardActions>
          </Card>
          <br />
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Tone Up!
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Type of Workouts: Triceps, Biceps, Back
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Goal: Show off my ripped body during my fitness competition!
          </Typography>
              </CardContent>
              <div className={classes.controls}>
              </div>
            </div>
            <CardMedia
              className={classes.cover}
              image={Muscle}
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

export default withStyles(styles)(WorkoutPlanList2)