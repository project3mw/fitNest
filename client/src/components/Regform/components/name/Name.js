import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import './name.css'

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}))

const Name = (props) => {
  return (
    <div id='fnameInput'>
      <TextField
        id='fname'
        key='fnameTextfield'
        label='First Name'
        multiline
        rowsMax='10'
        variant='outlined'
        value={props.userFirst}
        onChange={props.handleInputChange}
        margin='normal'
      />
    </div>
  ),
<div id='lnameInput'>
     <TextField
       id='lname'
       key='lnameTextfield'
       label='Last Name'
    //    multiline
    //    rowsMax='1'
       variant='outlined'
       value={props.userLast}
       onChange={props.handleInputChange}
       margin='normal'
     />
   </div>
}

export default Name
