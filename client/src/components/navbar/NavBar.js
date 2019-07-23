import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddIcon from "@material-ui/icons/Add";
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
  nb: {
    width: '100%',
    backgroundColor: 'transparent',
    //backgroundColor: '#990000',
    // backgroundImage: 'linear-gradient(147deg, #990000 0%, #ff0000 74%)',
    // backgroundColor: '#f39f86',
    // backgroundImage: 'linear-gradient(315deg, #f39f86 0%, #f9d976 74%)',
    // backgroundColor: '#4B0082',
    // backgroundImage: 'linear-gradient(316deg, #6c33a3 0%, #8241b8 74%)',
    color: 'white',
    position: 'fixed',
    bottom: 0,
    borderTopLeftRadius: '25px',
    borderTopRightRadius: '25px',
    
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
    backgroundColor: 'red',
    // backgroundColor: '#990000',
    // backgroundImage: 'linear-gradient(147deg, #990000 0%, #ff0000 74%)',
    color: 'white',
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
      <BottomNavigationAction
        label="Profile" style={{color: 'white'}}
        icon={<AccountCircleIcon />}
      />
      <BottomNavigationAction
        label="Plan" style={{color: 'white'}}
        // value="wp"
        icon={<ListAltIcon />}
      />
        <Fab className={classes.fabButton}>
          <AddIcon />
        </Fab>
        {/* <BottomNavigationAction
          label=""
          className={classes.addIcon}
          // value="create"
          icon={<AddCircleIcon />}
        /> */}
        />
      <BottomNavigationAction
        label="Nests" style={{color: 'white'}}
        // value="nests"
        icon={<BubbleChartIcon />}
      />
      <BottomNavigationAction
        label="Nesters" style={{color: 'white'}}
        // value="friends"
        icon={<PersonAddIcon />}
      />
    </BottomNavigation>
    </div>
  );
}
export default NavBar