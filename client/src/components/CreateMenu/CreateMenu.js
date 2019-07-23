import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function CreateMenu() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Create
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Create Exercise</MenuItem>
            <MenuItem onClick={popupState.close}>Create Workout Plan</MenuItem>
            <MenuItem onClick={popupState.close}>Create Nest</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default CreateMenu;