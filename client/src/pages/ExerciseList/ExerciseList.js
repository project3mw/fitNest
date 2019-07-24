import React, { Component } from 'react'
import axios from 'axios'
import './ExerciseList.css'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { spacing } from '@material-ui/system'
import Api from '../../utils/Api'
import Arnold from '../../assets/images/arnold.png'


class ExerciseList extends Component {
  state = {
    name:'',
    group:[],
    intensity:'',
    description:'',
    exercise:[],
    comment:[],
    imgsrc:'',
    workouts:[]
  }
  componentDidMount() {
    this.getExerciseCategory()
  }
  

  getExerciseCategory = () => {
    // const {name,group,intensity,description} = this.state
    console.log("get exercise categories")
    Api.getExerciseCategory()
    .then(response => {console.log(response.data.results)
      this.setState({group:response.data.results})
    }
    )
    .catch(e => console.log(e))
  }

  handleCategoryChange = e => {
    const {value} = e.target
    console.log(e.target)
    console.log(value)
    // console.log(e.target)
    this.setState({name:value})
    Api.getExerciseList(value)
    .then(response => {console.log(response.data)
      this.setState({exercise:response.data.results})
    }
    )
    .catch(e => console.log(e))

  }
  handleExerciseListChange = e => {
    const {value} = e.target
    console.log(e.target)
    console.log(value)
    // console.log(e.target)
    // this.setState({name:value})
    Api.getExerciseInfo(value)
    .then(response => {console.log(response.data.description)
      this.setState({description:response.data.description})
    }
    )
    .catch(e => console.log(e))
    Api.getExerciseImage(value)
    .then(response => {console.log(response)
      console.log(response.data.count)
      if(response.data.count > 0) {
        this.setState({imgsrc:response.data.results[0].image})
      }
      else {
        this.setState({imgsrc:Arnold})
      }
    }
    )
    .catch(e => console.log(e))
  }
  handleSubmit = event => {
    event.preventDefault()
    const {name,group,intensity,description} = this.state
    console.log(this.state)
    console.log(name,group,intensity,description)
  }
  render () {
    return(
      <>
        {/* <form>
        <p>
          <label htmlFor="name">name</label>
          <br />
          <input type="text" name = 'name' value = {this.state.name} onChange = {this.handleChange}/>
        </p>
        {this.state.name}
        <p>
          <label htmlFor="group">group</label>
          <br />
          <input type="text" name = 'group' value = {this.state.group} onChange = {this.handleChange}/>
        </p>
        <p>
          <label htmlFor="intensity">intensity</label>
          <br />
          <input type="text" name = 'intensity' value = {this.state.intensity} onChange = {this.handleChange}/>
        </p>
        <p>
          <label htmlFor="description">description</label>
          <br />
          <input type="text" name = 'description' value = {this.state.description} onChange = {this.handleChange}/>
        </p>
        <p>
          <button onClick = {this.handleSubmit}>Submit</button>
        </p>
        </form> */}
        <div>
        <Container maxWidth="sm" >
          <Grid container spacing={3} style={{ backgroundColor: '#cfe8fc' }}>
            <Grid item xs={12}>
            <Typography variant="h4" align="center" color="textSecondary" gutterBottom>
              Navbar should come here
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h4" align="center" color="textSecondary" gutterBottom>
              Exercise List
            </Typography>
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <form noValidate autoComplete="off">
                <TextField
                  id="standard-select-Category"
                  select
                  label="Exercise Category"
                  // className={classes.textField}
                  // value={values.currency}
                  onChange={this.handleCategoryChange}
                  SelectProps={{
                    MenuProps: {
                      marginleft: 2,
                      margingright: 2,
                      width: "auto",
                    },
                  }}
                  helperText="Please select Exercise category"
                  margin="normal"
                >
                  {this.state.group.map(option => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField> 
                <TextField
                  id="standard-select-exercise"
                  select
                  label="Exercise List"
                  // className={classes.textField}
                  // value={values.currency}
                  onChange={this.handleExerciseListChange}
                  SelectProps={{
                    MenuProps: {
                      marginleft: 2,
                      margingright: 2,
                      width: "auto",
                    },
                  }}
                  helperText="Select from list for more Exercise Info"
                  margin="normal"
                >
                  {this.state.exercise.map(option => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </form>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                multiline
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={this.state.description}
              /> 
            </Grid>
            <Grid item xs={12}>
            {/* <ButtonBase className={classes.image}> */}
              <img style={{ margin: 'auto', display: 'block', maxWidth: '50%', maxHeight: '50%',}} 
                alt="complex" src={this.state.imgsrc} />
            {/* </ButtonBase> */}
            </Grid>
            <Grid item xs={12}>
            {/* <ButtonBase className={classes.image}> */}
            <button onClick = {this.handleSubmit}>Add to my Workout Plan</button>
            {/* </ButtonBase> */}
            </Grid>
          </Grid>
        </Container>
        </div>
      </>    
    )
  }
}

export default ExerciseList