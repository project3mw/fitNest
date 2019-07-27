import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import './zipCode.css'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1)
  }
}))

const ZipCode = (props) => {
  // console.log(props)
  return (
    <div id='zipInput' className={useStyles.container}>
      <FormControl className={useStyles.formControl}>
        <InputLabel htmlFor='formatted-text-mask-input'>Zip Code</InputLabel>
        <Input
          key='zipCode'
          value={props.zip_code}
          onChange={props.handleZipCode}
          id='formatted-text-mask-input'
        />
      </FormControl>
    </div>
  )
}

export default ZipCode
