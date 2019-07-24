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
        userId: '',
        workoutPlanList: [], 
        
    }

    componentWillMount() {
            axios.get('/plans', (req, res) => {
              .then(({ data }) => {
                  this.setState({
                      name: data.name, 
                      group: data.group, 
                      intensity: data.intensity, 
                      favorite: data.favorite,
                      time: data.time,
                      description: data.description
                  })
              })
              .catch(e => console.log(e))


}





    render() {
            return (
                    <>
                            <div>
                                    {/* <TopNav /> */}
                                    {this.state.getPlan.map(getPlan => (
                                        <div>
                                        <p>{plan.name}</p>
                                        <p>{plan.name}</p>
                                        <p>{plan.name}</p>
                                        <p>{plan.name}</p>
                                        <p>{plan.name}</p>
                                        <p>{plan.name}</p>
                                        <p>{plan.name}</p>
                                        </div>
                                    ))}    
                                    {/* <OccList /> */}
                                    {/* <BottomNav /> */}
                            </div>
                           
                 
                    </>
            )
    }
}

export default WorkoutPlanList