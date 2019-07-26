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
import Burpee from '../../assets/images/Burpee.jpg';
import Cable from '../../assets/images/cable.jpg';
import ezbar from '../../assets/images/ezbar.jpg';
import dumbbell from '../../assets/images/dumbbell.jpg';
import hammercurl from '../../assets/images/hammercurl.png';
import hercules from '../../assets/images/hercules.jpg';
import benchpress from '../../assets/images/benchpress.jpg';

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

// export default function MediaCard() {
//   const classes = useStyles();

class PlanExercises extends Component {
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
            return <Redirect to='/WorkoutPlanList' />
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
                  <b>Burpees</b>
                  <p><b>Intensity:</b> Intermediate</p>
          </Typography>
                 <Typography variant="subtitle1" color="textSecondary">
                  <p>Jump, lay down on your chest, do a pushup then jump. Repeat!</p>
                 </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={Burpee}
              title="Burpee"
            />
            
          </Card>
          <br />
 <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  <b>Cable Woodchoppers</b>
                  <p><b>Intensity:</b> Advanced</p>
          </Typography>
                 <Typography variant="subtitle1" color="textSecondary">
                   <p>Set cable pulley slightly lower than chest height. Keep body facing forward with hips stable.  Grab the pulley handle, fully extend your arms and bring your arms forward and across your body. Hold for 1 second at the end of the movement and slowly return to starting position.</p>
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={Cable}
              title="Woodchopper"
            /><CardActions>
            <IconButton aria-label="View Workouts">
          <launchIcon /></IconButton></CardActions>
          </Card>
          <br />
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  <b>Biceps Curls With EZ-bar</b>
                  <p><b>Intensity:</b> Beginner</p>
          </Typography>
                 <Typography variant="subtitle1" color="textSecondary">
                  <p>Hold the SZ-bar shoulder-wide, the back is straight, the shoulders slightly back, the arms are streched. Bend the arms, bringing the weight up, with a fast movement. Without pausing, let down the bar with a slow and controlled movement. Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows.</p>
          </Typography>
              </CardContent>
              <div className={classes.controls}>
              </div>
            </div>
            <CardMedia
              className={classes.cover}
              image={ezbar}
              title="EZ Bar"
            />
            <CardActions>
            <IconButton aria-label="View Workout Plan">
            <launchIcon />
          </IconButton></CardActions>
          </Card>
          <br />
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  <b>Dumbbells on Scott Machine</b>
                  <p><b>Intensity:</b> Advanced</p>
          </Typography>
                 <Typography variant="subtitle1" color="textSecondary">
                  <p>Stand with a dumbbell in each hand.
Raise the dumbbells to the height of your chin, with your elbows pointing diagonally out to the sides and your pinkie fingers raised higher than your thumbs.
Exhale as you swing your elbows backward and a little upward as you move your head and torso forward. At the top of the movement, the pinkie sides of your fists should be facing almost directly upward.
Inhale as you reverse the movement and return to the starting position.</p>
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={dumbbell}
              title="dumbbell"
            />
            </Card>
          <br />
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  <b>Hammercurls</b>
                  <p><b>Intensity:</b> Intermediate</p>
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <p>Hold two dumbbells and sit on a bench with a straight back, the shoulders are slightly rolled backwards. Your pals point to your body. Bend the arms and bring the weight up with a fast movement. Don't rotate your hands, as with the curls. Without any pause bring the dumbbell down with a slow, controlled movement. Don't swing your body during the exercise, the biceps should do all the work here. The elbows are at your side and don't move.</p>
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={hammercurl}
              title="hammercurl"
            />
               </Card>
         
           <br />
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  <b>Hercules Pillars</b>
                  <p><b>Intensity: </b>Advanced</p>

          </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                  <p>Grab two cables stand in the middle so both have tension and hold</p>
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={hercules}
              title="hercules"
            />
               </Card>
               
        <br />
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  <b>Bench Press Narrow Grip</b>
                  <p><b>Intesity:</b>: Intermediate</p>
          </Typography>
                 <Typography variant="subtitle1" color="textSecondary">
                  <p>Lay down on a bench, the bar is directly over your eyes, the knees form a slight angle and the feet are firmly on the ground. Hold the bar with a narrow grip (around 20cm.). Lead the weight slowly down till the arms are parallel to the floor (elbow: right angle), press then the bar up. When bringing the bar down, don't let it down on your nipples as with the regular bench pressing, but somewhat lower.</p>
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={benchpress}
              title="benchpress"
            />
               </Card>
         </div>       
      </>

    )
  }
}

























// class PlanExercises extends Component {
//     state = {
//         name: '',
//         group: '',
//         intensity: '',
//         favorite: '',
//         time: '',
//         description: '',
//         plans: [],
//         userId: '',
//         workoutPlanList: [], 
//         viewWorkouts: false
        
//     }

//         handleSubmit = () => {
//           this.setState(() => ({
//             viewWorkouts: true
//           }))
//         }
   

//     componentWillMount() {
//        axios.get('/workouts')
//             // axios.get(`/users/${id}`)
//                     .then(({ data }) => {
//                         console.log(data[0].name)
//                         this.setState({
//                       name: data[0].name,
//                       group: data[0].group, 
//                       intensity: data[0].intensity, 
//                       favorite: data[0].favorite,
//                       workoutPlanList: data[0].workout,
//                       time: data[0].time,
//                       description: data[0].description
//                         })
//                     })
//     }
    
// //     export default function MediaCard() {
// //   const classes = useStyles();


// render() {
//           if (this.state.viewWorkouts === true) {
//             return <Redirect to='/WorkoutPlanList' />
//           }
//           const { classes } = this.props
  
//   return (
//       <>
//        <div>
//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={Burpee}
//           title="Burpee"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Burpees
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Jump up, lay down on your chest, do a pushup then jump! Repeat!
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary" className={classes.button} onClick={this.handleSubmit}>
//           View Workout Plans
//         </Button>
//        <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//     </div>
//     <div><Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="https://www.thecoastnews.com/wp-content/uploads/2018/06/bigstock-163655366.jpg"
//           title="Burpee"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Cable Woodchoppers
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Set cable pulley slightly lower than chest height. Keep body facing forward with hips stable. 
//             Grab the pulley handle, fully extend your arms and bring your arms forward and across your body. Hold for 1 second at the end of the movement and slowly return to starting position.
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary" className={classes.button} onClick={this.handleSubmit}>
//           View Workout Plans
//         </Button>
//        <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//     </div>
//     <div><Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="https://www.thecoastnews.com/wp-content/uploads/2018/06/bigstock-163655366.jpg"
//           title="Burpee"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Cable Woodchoppers
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Set cable pulley slightly lower than chest height. Keep body facing forward with hips stable. 
//             Grab the pulley handle, fully extend your arms and bring your arms forward and across your body. Hold for 1 second at the end of the movement and slowly return to starting position.
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary" className={classes.button} onClick={this.handleSubmit}>
//           View Workout Plans
//         </Button>
//        <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//     </div>
//     <div><Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="https://www.thecoastnews.com/wp-content/uploads/2018/06/bigstock-163655366.jpg"
//           title="Burpee"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Cable Woodchoppers
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Set cable pulley slightly lower than chest height. Keep body facing forward with hips stable. 
//             Grab the pulley handle, fully extend your arms and bring your arms forward and across your body. Hold for 1 second at the end of the movement and slowly return to starting position.
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary" className={classes.button} onClick={this.handleSubmit}>
//           View Workout Plans
//         </Button>
//        <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//     </div>
//     <div><Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="https://www.thecoastnews.com/wp-content/uploads/2018/06/bigstock-163655366.jpg"
//           title="Burpee"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Cable Woodchoppers
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Set cable pulley slightly lower than chest height. Keep body facing forward with hips stable. 
//             Grab the pulley handle, fully extend your arms and bring your arms forward and across your body. Hold for 1 second at the end of the movement and slowly return to starting position.
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary" className={classes.button} onClick={this.handleSubmit}>
//           View Workout Plans
//         </Button>
//        <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//     </div>
//     <div><Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="https://www.thecoastnews.com/wp-content/uploads/2018/06/bigstock-163655366.jpg"
//           title="Burpee"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Cable Woodchoppers
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Set cable pulley slightly lower than chest height. Keep body facing forward with hips stable. 
//             Grab the pulley handle, fully extend your arms and bring your arms forward and across your body. Hold for 1 second at the end of the movement and slowly return to starting position.
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary" className={classes.button} onClick={this.handleSubmit}>
//           View Workout Plans
//         </Button>
//        <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//     </div>
//     </>
//   )
// }
// }
        
export default withStyles(styles)(PlanExercises)

            
          



//1. test plan route (works on local but is Dean inputting plans?)
//2. Test axios.get('/plans) to render components
//Test get workout(id hardcode in id) then render component
