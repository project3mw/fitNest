import React, {Component} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
      marginTop: '30px',
      marginLeft: '15%',
      marginRight: '15%',
      height: '50px',
      width: '70%',
      fontSize: '20px',
      fontWeight: 'bold',
      backgroundColor: '#4ADDAF',
      textAlign: 'center',
    },
    input: {
      display: 'none',
    },
  }));


//   searchHandler(){
    //   axios call to your backend - have items preset in backend return based on 'tu
    //   axios.get('/gifts)
    //             //can be a GET request where you put the seach term as a query param
    //             //once you have data come back from this call (so in the `.then()`)
    //             //set the state to be:
    //             this.setState({
    //                 showSearchForm: !this.state.showSearchForm, 
    //                 searchResults: data, //this is returned from the axios req
    //                 showSearchResults: !this.state.showSearchResults 
    //             })
    //     }
    

const AddtoWorkoutPlan = () => {
    const classes = useStyles()
    // const {item} = this.props

    return(
        <>
        <TextField
        // id="search"
        label="Input a search field"
        // value={search}
        variant="outlined"
        />
         <Button id='searcBtn' variant="contained" color="primary" Selected ClassName="selBtn" className={classes.button} onClick={() => {
       
        }}>
        Choose a muscle group
      </Button>
        
</>
      )
        }
            
    //your form goes here and you attach the function from the main component via props
    //I think you should be able to get the value of the input if you wrap in a form component
    //look back at other examples of how you have done it or jump on google
  

    //something like:
    //Add in on submit function
   
    //render the button for add experience here and set up the click handler to call the redirect from the home component 
    //Add this.addtoWorkoutPlan function to this button 


  

export default AddtoWorkoutPlan