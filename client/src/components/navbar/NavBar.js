import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import Icon from "@material-ui/core/Icon";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<AccountCircleIcon />}
      />
      <BottomNavigationAction
        label="Workout Plan"
        value="wp"
        icon={<ListAltIcon />}
      />
      <BottomNavigationAction
        label="Nests"
        value="nests"
        icon={<BubbleChartIcon />}
      />
      <BottomNavigationAction
        label="Friends"
        value="friends"
        icon={<PersonAddIcon />}
      />
      <BottomNavigationAction
        label="Create"
        value="create"
        icon={<AddCircleIcon />}
      />
    </BottomNavigation>
  );
}
export default NavBar