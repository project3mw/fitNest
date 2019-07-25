import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from "@material-ui/icons/Person";
// import BubbleChartIcon from "@material-ui/icons/BubbleChart";
// import ListIcon from "@material-ui/icons/List";
import ClassIcon from "@material-ui/icons/Class";
// import PersonAddIcon from "@material-ui/icons/PersonAdd";
// import AddIcon from "@material-ui/icons/Add";
// import Fab from '@material-ui/core/Fab';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
// import RowingIcon from '@material-ui/icons/Rowing'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'

const useStyles = makeStyles({
  nb: {
    width: '100%',
    backgroundColor: '#ffd045',
    backgroundImage: 'linear-gradient(315deg, #ffd045 0%, #d14545 74%)',
    color: 'white',
    position: 'fixed',
    bottom: 0,
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
    backgroundColor: '#FFE6D0',
    color: 'grey',
  },
});

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.nb}
      
    >
      <Link to='/Profile'>
      <BottomNavigationAction
        label="Profile" 
        style={{color: 'white'}}
        icon={<PersonIcon />}
      />
      </Link>
      <Link to='/Create'>
      <BottomNavigationAction label='Workouts' value='workouts'
        style={{color: 'white'}} icon={<DirectionsRunIcon />}
        />
        </Link>
      <Link to='/WorkoutPlanList'>
      <BottomNavigationAction
        label="Plan" style={{color: 'white'}} size={50}
        // value="wp"
        icon={<ClassIcon />}
      />
      </Link>


        <Link to='/Login'>
        <BottomNavigationAction label='Sign Out' value='signout'
        style={{color: 'white'}} icon={<MeetingRoomIcon />}
        />
      </Link>
    {/* <Link to='/NestList'>
      <BottomNavigationAction
        label="Nests" style={{color: 'white'}}
        // value="nests"
        icon={<BubbleChartIcon />}
      />
      </Link>
      <Link to='/FriendList'>
      <BottomNavigationAction
        label="Nesters" style={{color: 'white'}}
        // value="friends"
        icon={<PersonAddIcon />}
      />
      </Link> */}
    </BottomNavigation>
    </div>
  );
}
export default NavBar