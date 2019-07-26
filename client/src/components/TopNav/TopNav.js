import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import DragHandleIcon from "@material-ui/icons/DragHandle";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";



const useStyles = makeStyles(theme => ({
    topNav: {
    flexGrow: 1,
    position: "static",
    marginLeft: '10px',
    padding: '10px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

function TopNav() {
  const classes = useStyles();

  return (
    <div className={classes.topNav}>
          <DragHandleIcon style={{ color: 'white'}} />
      
    </div>
  );
}
export default TopNav