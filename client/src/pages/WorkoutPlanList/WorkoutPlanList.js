import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
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
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
​
​
​
class Profile extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    age: '',
    gender: '',
    weight: '',
    gWeight: '',
    location: '',
    height: '',
    fitLevel: '',
    userId: '',
    
  }
// let userToken = whateverlocalstorage
  componentWillMount() {
      axios.get('/users/5d337eda68e4752249612d36')
      // axios.get(`/users/${id}`)
          .then(({ data }) => {
            this.setState({ 
                name: data.name, 
                username: data.username,
                email: data.email,
                age: data.age, 
                gender: data.gender, 
                height: data.height,
                weight: data.weight, 
                gWeight: data.gWeight,
                fitLevel: data.fitLevel
            })
          })
  }
​
​
  render() {
      return (
​
          
export default function Profile() {
 const classes = useStyles();
 const [expanded, setExpanded] = React.useState(false);
​
 function handleExpandClick() {
  setExpanded(!expanded);
 }
​
 return (
     <>
  <Card className={classes.card}>
   <CardHeader
    avatar={
     <Avatar aria-label="Profile" className={classes.avatar}>
      A
     </Avatar>
    }
    action={
     <IconButton aria-label="Settings">
      <MoreVertIcon />
     </IconButton>
    }
    title= "My Profile"
    subheader="Let's Get Fit!"
   />
   <CardMedia
    className={classes.media}
    image="../../assets/images/arnold.png"
    title="Avatar"
   />
   <CardContent>
    <Typography variant="body2" color="textSecondary" component="p">
    <p>{this.state.name}</p>
    <p>{this.state.username}</p>
    <p>{this.state.email}</p>
​
    </Typography>
   </CardContent>
   <CardActions disableSpacing>
     <IconButton
     className={clsx(classes.expand, {
      [classes.expandOpen]: expanded,
     })}
     onClick={handleExpandClick}
     aria-expanded={expanded}
     aria-label="Show more"
    >
     <ExpandMoreIcon />
    </IconButton>
   </CardActions>
   <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
     <Typography paragraph>Stats:</Typography>
     <Typography paragraph>
      {this.state.age} 
      {this.state.gender}
      {this.state.location}
     </Typography>
     <Typography paragraph>
      <h1>Goals:</h1>
      {this.stage.weight}
      {this.stage.gWeight}
     </Typography>
     <Typography paragraph>
      <h1>Starting Fitness Level:</h1> 
      <h3>Advanced<h3>
     </Typography>
     </CardContent>
   </Collapse>
  </Card>
 );
}
          <Card className={classes.card}>
   <CardActionArea>
    <CardMedia
     className={classes.media}
     image="https://s3.amazonaws.com/webserver-assets-jackcanfield/wp-content/uploads/2019/01/24194552/visualization-and-motivation.jpg"
     title="Motivation"
    />
    <CardContent>
     <Typography gutterBottom variant="h5" component="h2">
      <p>Push yourself, because no one else is going to do it for you.</p>
     </Typography>
     </CardContent>
   </CardActionArea>
   <CardActions>
    
   </CardActions>
  </Card>
 );
}
        
        
        
    
export default (withStyles)Profile
Collapse

Katie Lewis [9:21 PM]
We need the styles from material ui

Gia [9:21 PM]
okay i took out the expand and icon
image.png 


Katie Lewis [9:33 PM]
Sorry being bombarded
:sleepy:
that should work.. just need to add in styles that material had
Untitled 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import arnold from '../../assets/images/arnold.png'
import { Link } from 'react-router-dom';
import axios from 'axios'
import CardContent from '@material-ui/core/CardContent';
import ProfileTop from '../../components/ProfileTop'
import Typography from '@material-ui/core/Typography';
// import Stacks from '../../utils/Stacks.js'
import Card from '@material-ui/core/Card';
class Profile extends Component {
 state = {
  name: '',
  username: '',
  email: '',
  age: '',
  gender: '',
  weight: '',
  gWeight: '',
  location: '',
  height: '',
  fitLevel: '',
  userId: '',
 }
 // let userToken = whateverlocalstorage
 componentWillMount() {
  axios.get('/users/5d337eda68e4752249612d36')
   // axios.get(`/users/${id}`)
   .then(({ data }) => {
    this.setState({
     name: data.name,
     username: data.username,
     email: data.email,
     age: data.age,
     gender: data.gender,
     height: data.height,
     weight: data.weight,
     gWeight: data.gWeight,
     fitLevel: data.fitLevel
    })
   })
 }
 render() {
  return (
     <>
    <Card className={classes.card}>
     <CardHeader
      avatar={
       <Avatar aria-label="Profile" className={classes.avatar}>
        A
     </Avatar>
      }
      action={
       <IconButton aria-label="Settings">
        <MoreVertIcon />
       </IconButton>
      }
      title="My Profile"
      subheader="Let's Get Fit!"
     />
     <CardMedia
      className={classes.media}
      image="../../assets/images/arnold.png"
      title="Avatar"
     />
     <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
       <p>{this.state.name}</p>
       <p>{this.state.username}</p>
       <p>{this.state.email}</p>
      </Typography>
     </CardContent>
     <CardContent>
      <Typography paragraph>Method:</Typography>
      <Typography paragraph>
       {this.state.age}
       {this.state.gender}
       {this.state.location}
      </Typography>
      <Typography paragraph>
       Goals:
        {this.stage.weight}
       {this.stage.gWeight}
      </Typography>
      <Typography paragraph>
       Starting Fitness Level:
      {this.stage.fitLevel}
      </Typography>
     </CardContent>
    </Card>
    <Card className={classes.card}>
     <CardActionArea>
      <CardMedia
       className={classes.media}
       image="https://s3.amazonaws.com/webserver-assets-jackcanfield/wp-content/uploads/2019/01/24194552/visualization-and-motivation.jpg"
       title="Motivation"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="h2">
        <p>Push yourself, because no one else is going to do it for you.</p>
       </Typography>
      </CardContent>
     </CardActionArea>
    </Card>
    );
   }
           
  }       
       
export default (withStyles)Profile

