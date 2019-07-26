import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import './fitnessLevel.css'

const styles = theme => ({
  rootFitness: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControlfitlevel: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
})

const FitnessLevel = (props) => {
  return (
    <FormControl id='fitlevel' className={styles.formControlFitness}>
      <InputLabel htmlFor='fitness-level'>Fitness level</InputLabel>
      <Select
        key='fitnessLevel'
        id='fitnessLevel'
        value={props.fitness}
        onChange={props.handleChangeFitness}
        input={<Input name='fitnessLevel' id='fitnessLevel' />}
      >
        <MenuItem value='beginner'>Beginner</MenuItem>
        <MenuItem value='intermediate'>Intermediate</MenuItem>
        <MenuItem value='advanced'>Advanced</MenuItem>
      </Select>
    </FormControl>
  )
}

export default FitnessLevel
