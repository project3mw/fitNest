import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NavBar from '../../components/navbar'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    // display: 'flex',
    borderRadius: '20px',
    width: '80%',
    margin: '0 auto',
    padding: '10px',
    marginTop: '150px',
    // display: 'grid',
    // margin: '0 auto',
    // marginHorizontal: '50px',
    // alignContent: 'center',
    // width: '100%',

  },
  // nav: {
    
  //   display: 'flex',
  //   width: 'auto', 
  // },
  // formRoot: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   margin: '0 auto',
  //   marginHorizontal: '50px',
  // },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    display: 'flex'
  }
}))

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const muscleGroups = [
  'Abs',
  'Back',
  'Biceps',
  'Calves',
  'Chest',
  'Legs',
  'Shoulder',
  'Triceps'
]

const workoutList = [
  'Biceps Curl With Barbell',
  'Biceps Curl With Cable',
  'Chin-ups',
  'Hammercurls',
  'Overhand Cable Curl',
  'Bent Over Rowing',
  'Close-grip Lat Pull Down',
  'Deadlifts',
  'Lat Pull Down (Leaning Back)',
  'Hyperextensions'
]


function getStyles(muscle, muscleState, theme) {
  return {
    fontWeight:
      muscleState.indexOf(muscle) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}
function getStyles2(workout, workoutState, theme) {
  return {
    fontWeight:
    workoutState.indexOf(workout) === -1
      ? theme.typography.fontWeightRegular
      : theme.typography.fontWeightMedium,
  }
}

const PlanForm = _ => {
  const classes = useStyles()
  const theme = useTheme()

  const [muscleState, setMuscleState] = useState([])

  const [workoutState, setWorkoutState] = useState([])
  
  const [planState, setPlanState] = useState({
    name: "",
    workouts: [],
    workoutIds: [],
    focus: [],
    goal: "",
    creator: ""
  })

  // send data to server
  planState.handleCreatePlan = _ => {
    setPlanState({
      ...planState,
      focus: muscleState
    })
  }

  planState.handleOnChange = event => {
    setPlanState({
      ...planState,
      [event.target.name]: event.target.value
    })
  }
  planState.handleMuscleSelect = event => {
    setMuscleState(event.target.value)
    // setPlanState({
    //   ...planState,
    //   focus: event.target.value
    // })
  }
  planState.handleWorkoutSelect = event => {
    setWorkoutState(event.target.value)
    // setPlanState({
    //   ...planState,
    //   workoutIds: event.target.value
    // })
  }

  // planState.handleGetByMuscle = (muscle1, muscle2) => {
  //   Stacks.getWorkoutsByMuscles(`${muscle1}`, `${muscle2}`)
  //     .then(({ data }) => setPlanState({
  //       ...planState,
  //       workouts: data
  //     }))
  //     .catch(e => console.error(e))
  // }
  // planState.handleGetWorkoutName = _ => {
  //   let tempArr = []
  //   planState.workouts.forEach(workout=> tempArr.push())
  //   setPlanState({ ...planState, workoutNames: tempArr })
  // }


  return (
    <div className={classes.container}>
      <p>
        <label htmlFor="name">Workout Plan Name:</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={planState.handleOnChange}
          placeholder="Bulk Up or Shut Up!"
          value={planState.name}
          style={{backgroundColor:'transparent', border: 'none'}}


        />
      </p>
      <p>
      <div className={classes.formRoot}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple">Focus:</InputLabel>
          <Select
            multiple
            value={muscleState}
            onChange={planState.handleMuscleSelect}
            input={<Input id="select-multiple" />}
            MenuProps={MenuProps}
          >
            {muscleGroups.map(muscle => (
              <MenuItem key={muscle} value={muscle} style={getStyles(muscle, muscleState, theme)}>
                {muscle}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
      </p>
      <p>
      <div className={classes.formRoot}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple">Exercises:</InputLabel>
          <Select
            multiple
            value={workoutState}
            onChange={planState.handleWorkoutSelect}
            input={<Input id="select-multiple" />}
            MenuProps={MenuProps}
          >
            {workoutList.map(workout => (
              <MenuItem key={workout} value={workout} style={getStyles(workout, workoutState, theme)}>
                {workout}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
      </p>
      <p>
        <label htmlFor="goal">Goal For The Workout Plan:</label>
        <br />
        <input
          type="text"
          name="goal"
          onChange={planState.handleOnChange}
          placeholder="Cut, Bulk, General"
          value={planState.goal}
        />
      </p>
      <p>
      <Link to='/WP' style={{textDecoration: 'none'}}>
        <Button
        type="submit"
        fullWidth
        variant="contained"
        // color="secondary"
        className={classes.submit}
        >
          Create Workout Plan
          </Button>
        </Link>
      </p>

<NavBar />
     </div>
  )
}

export default PlanForm