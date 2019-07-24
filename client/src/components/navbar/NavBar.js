import React from "react";
import { Link } from 'react-router-dom'
;
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
    // backgroundColor: '#FF8C00',
//     backgroundColor: '#ea2027',
// backgroundImage: 'linear-gradient(315deg, #ea2027 0%, #ee5a24 74%)',
backgroundColor: '#ffd045',
backgroundImage: 'linear-gradient(315deg, #ffd045 0%, #d14545 74%)',
// backgroundColor: '#ffcb43',
// backgroundImage: 'linear-gradient(319deg, #ffcb43 0%, #ff6425 37%, #ff0016 100%)',


    // backgroundColor: 'transparent',
    // backgroundColor: '#990000',
    // backgroundImage: 'linear-gradient(147deg, #990000 0%, #ff0000 74%)',
    // backgroundColor: '#f39f86',
    // backgroundImage: 'linear-gradient(315deg, #f39f86 0%, #f9d976 74%)',
    
    // backgroundColor: '#4B0082',
    // backgroundImage: 'linear-gradient(316deg, #6c33a3 0%, #8241b8 74%)',
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
    // backgroundColor: '#990000',
    // backgroundImage: 'linear-gradient(147deg, #990000 0%, #ff0000 74%)',
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


        <Link to='/'>
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