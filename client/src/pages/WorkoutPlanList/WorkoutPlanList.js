import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import arnold from '../../assets/images/arnold.png'
import { Link } from 'react-router-dom';
import axios from 'axios'
import CardContent from '@material-ui/core/CardContent';
import ProfileTop from '../../components/ProfileTop'
import Typography from '@material-ui/core/Typography';


class WorkoutPlanList extends Component {
    state = {
        name: '',
        group: '',
        intensity: '',
        favorite: '',
        time: '',
        description: '',
        plans: [],
        userId: '',
        workoutPlanList: [], 
        viewWorkouts: false
        
    }

   

    componentWillMount() {
       axios.get('/plans')
            // axios.get(`/users/${id}`)
                    .then(({ data }) => {
                        console.log(data[0].name)
                        this.setState({
                    name: data[0].name,
                    group: data[0].group, 
                      intensity: data[0].intensity, 
                      favorite: data[0].favorite,
                      workoutPlanList: data[0].workout,
                      time: data[0].time,
                      description: data[0].description
                        })
                    })
    }
    
        


            
          








    render() {
        // {!viewWorkouts ? 
            return (
                    <>
                    <div>
                        <h1> {this.state.name} </h1>
</div>
                    </>

                        
            )
    }
}

export default WorkoutPlanList
//1. test plan route (works on local but is Dean inputting plans?)
//2. Test axios.get('/plans) to render components
//Test get workout(id hardcode in id) then render component
