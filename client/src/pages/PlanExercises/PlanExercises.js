import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import arnold from '../../assets/images/arnold.png'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

// export default function MediaCard() {
//   const classes = useStyles();

class PlanExercises extends Component {
    state = {
        name: '',
        group: '',
        intensity: '',
        favorite: '',
        time: '',
        description: '',
        plans: [],
        userId: '',
        workoutPlanList: [], 
        viewWorkouts: false
        
    }

        handleSubmit = () => {
          this.setState(() => ({
            viewWorkouts: true
          }))
        }
   

    componentWillMount() {
       axios.get('/plans')
            // axios.get(`/users/${id}`)
                    .then(({ data }) => {
                        console.log(data[0].name)
                        this.setState({
                    name: data[0].name,
                    group: data[0].group, 
                      intensity: data[0].intensity, 
                      favorite: data[0].favorite,
                      workoutPlanList: data[0].workout,
                      time: data[0].time,
                      description: data[0].description
                        })
                    })
    }
    
//     export default function MediaCard() {
//   const classes = useStyles();


render() {
          if (this.state.viewWorkouts === true) {
            return <Redirect to='/WorkoutPlanList' />
          }
          const { classes } = this.props
  
  return (
      <>
      <div>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.thecoastnews.com/wp-content/uploads/2018/06/bigstock-163655366.jpg"
          title="Barbell"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Burpees
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Jump up, lay down on your chest, do a pushup then jump! Repeat!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.button} onClick={this.handleSubmit}>
          View Workout Plans
        </Button>
       <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
    <div><Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.thecoastnews.com/wp-content/uploads/2018/06/bigstock-163655366.jpg"
          title="Burpee"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cable Woodchoppers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Set cable pulley slightly lower than chest height. Keep body facing forward with hips stable. 
            Grab the pulley handle, fully extend your arms and bring your arms forward and across your body. Hold for 1 second at the end of the movement and slowly return to starting position.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.button} onClick={this.handleSubmit}>
          View Workout Plans
        </Button>
       <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
}
        


            
          







// {/* 
// //     render() { */}
// //         // {!viewWorkouts ? 
// //             return (
// //                     <>
// //                     <div>
// //                         <h1> {this.state.name} </h1>
// // </div>
// //                     </>

                        
// //             )
// //     }
// // }

export default makeStyles(styles)(PlanExercises)
//1. test plan route (works on local but is Dean inputting plans?)
//2. Test axios.get('/plans) to render components
//Test get workout(id hardcode in id) then render component
