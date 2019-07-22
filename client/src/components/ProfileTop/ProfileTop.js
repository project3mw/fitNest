import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import arnold from '../../assets/images/arnold.png'
import { Link } from 'react-router-dom';

const styles = theme => ({
  profileDiv: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    
  },
  button: {
    width: 200,
    margin: 5,
  },
  buttonbox: {
    paddingLeft: 5,
  },
  bigAvatar:{
    width: 70,
    height: 70,
    paddingTop: 10,
  },
});



function ProfileTop(props) {
  const { classes } = props;

  return (
    <div className={classes.profileDiv}>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar alt="Arnold" src={arnold} className={classes.bigAvatar} /> 
          </Grid>
          <Grid item xs>
          <div className={classes.buttonbox}>

          <Link to = '/WorkoutPlanList'>
          <Button className={classes.button} variant="outlined" className={classes.button}>
           View Workout Plans
          </Button >
          </Link> 

          <Button className={classes.button} variant="outlined" className={classes.button}>View Nests  </Button>
          
          
        

          </div>
          </Grid>
        </Grid>
        
      </Paper>
    </div>
  );
}

ProfileTop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileTop);