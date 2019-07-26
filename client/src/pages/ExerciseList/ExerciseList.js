import React, { Component } from "react";
import axios from "axios";
import "./ExerciseList.css";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import { spacing } from "@material-ui/system";
import Api from "../../utils/Api";
import Arnold from "../../assets/images/arnold.png";
import './ExerciseList.css'

class ExerciseList extends Component {
  state = {
    name: "", //category id
    group: [], //muscle group category
    intensity: "",
    description: "", //exercise description
    exercise: [], //list of exercise in muscle group
    // comment:[],
    selectedGroup: null,
    exerciseList: null,
    imgsrc: "", //exercise image
    workouts: []
  };
  componentDidMount() {
    this.getExerciseCategory();
  }

  handleMuscleGroup = e => {
    const { value } = e.target
    this.setState({ selectedGroup: value })
    this.handleCategoryChange(e)
  }

  goGetExercisesForMuscleGroup = (muscleGroup) => {

  }

  handleExerciseGroup = e => {
    this.setState({ exerciseList: e.target.value})
  }

  //Getting muscle group category
  getExerciseCategory = () => {
    // const {name,group,intensity,description} = this.state
    console.log("get exercise categories");
    Api.getExerciseCategory()
      .then(response => {
        console.log(`This is the api response ${response.data.results}`);
        this.setState({ group: response.data.results });
      })
      .catch(e => console.log(e));
  };
  //Getting list of exercise for selected muscle group
  handleCategoryChange = e => {
    const { value } = e.target;
    console.log(`this is the value/etarget ${e.target}`);
    console.log(`this is the value ${value}`);
    // console.log(e.target)
    this.setState({ name: value });
    this.setState({selectedGroup: value})
    Api.getExerciseList(value)
      .then(response => {
        console.log(response.data);
        this.setState({ exercise: response.data.results });
      })
      .catch(e => console.log(e));
  }
  stripHTML(text) {
    return text.replace(/<.*?>/gm, '')
  }
  //Getting exercise description for selected exercise
  handleExerciseListChange = e => {
    const { value } = e.target;
    console.log(`this is the value/etarget ${e.target}`);
    console.log(`this is the value ${value}`);
    // console.log(e.target)
    // this.setState({name:value})
    this.setState({exerciseList: value})
    Api.getExerciseInfo(value)
      .then(response => {
        console.log(response.data.description)
        this.setState({ description: this.stripHTML(response.data.description) })
        // this.getElementById('exer-description').text(this.state.description); 
      })
      .catch(e => console.log(e));
    //Getting exercise image for selected exercise
    Api.getExerciseImage(value)
      .then(response => {
        console.log(response);
        console.log(response.data.count);
        if (response.data.count > 0) {
          this.setState({ imgsrc: response.data.results[0].image });
        } else {
          this.setState({ imgsrc: Arnold });
        }
      })
      .catch(e => console.log(e));
  };
  //function for submit button
  handleSubmit = event => {
    event.preventDefault();
    const { name, group, intensity, description } = this.state;
    console.log(this.state);
    console.log(name, group, intensity, description);
  };
  render() {
    console.log('here are the props::::::::: ', this.props)
    console.log('here is the state:::::::: ', this.state)
    return (
      <>
        <div>
          <Container maxWidth="sm">
            <Grid container spacing={3} style={{ backgroundColor: "#cfe8fc" }}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  align="center"
                  color="textSecondary"
                  gutterBottom
                >
                  Navbar should come here
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  align="center"
                  color="textSecondary"
                  gutterBottom
                >
                  Exercise List
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} align="center">
                {/* <form noValidate autoComplete="off"> */}
                  <FormControl>
                    <InputLabel width='100px' htmlFor="category">Category</InputLabel>
                    <Select
                      autoWidth
                      value={this.state.selectedGroup}
                      onChange={this.handleCategoryChange}
                      inputProps={{
                        id: "category"
                      }}
                    >
                      {this.state.group.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} align="center">
                  <FormControl>
                    <InputLabel htmlFor="Exercise">Exercise</InputLabel>
                    <Select
                      autoWidth
                      value={this.state.exerciseList}
                      onChange={this.handleExerciseListChange}
                      inputProps={{
                        id: "Exercise"
                      }}
                    >
                      {this.state.exercise.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  </Grid>
                {/* </form> */}
              <Grid item xs={12}>
                <InputLabel htmlFor="exercise-description">Description</InputLabel>
                <TextField
                  id="standard-full-width"
                  label="Description"
                  style={{ margin: 8 }}
                  placeholder=""
                  // helperText="Full width!"
                  fullWidth
                  multiline
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                  value={this.state.description}
                />
                {/* <div id="exer-description">
                  {this.state.description}
                </div> */}
              </Grid>
              <Grid item xs={12}>
                {/* <ButtonBase className={classes.image}> */}
                <img
                  style={{
                    margin: "auto",
                    display: "block",
                    maxWidth: "50%",
                    maxHeight: "50%"
                  }}
                  alt="complex"
                  src={this.state.imgsrc}
                />
                {/* </ButtonBase> */}
              </Grid>
              <Grid item xs={12}>
                {/* <ButtonBase className={classes.image}> */}
                <button onClick={this.handleSubmit}>
                  Add to my Workout Plan
                </button>
                {/* </ButtonBase> */}
              </Grid>
            </Grid>
          </Container>
        </div>
      </>
    );
  }
}

export default ExerciseList;


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

                          {/* <TextField
                  id="standard-select-Category"
                  select
                  label="Exercise Category"
                  // className={classes.textField}
                  value="fdsaifdusiafjidasjfudai"
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
                  // value={this.state.group[this.state.name].name}
                  >
                  {this.state.group.map(option => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>  */}
                {/* //////////////////////////////////////////////////////////// */}
                  {/* //////////////////////////////////////////////////////////// */}
                  {/* <TextField
                    id="standard-select-exercise"
                    select
                    label="Exercise List"
                    // className={classes.textField}
                    // value={this.state.exercise}
                    onChange={this.handleExerciseListChange}
                    SelectProps={{
                      MenuProps: {
                        marginleft: 2,
                        margingright: 2,
                        width: "auto"
                      }
                    }}
                    helperText="Select from list for more Exercise Info"
                    margin="normal"
                  >
                    {this.state.exercise.map(option => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField> */}
