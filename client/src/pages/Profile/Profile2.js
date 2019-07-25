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



class Profile2 extends Component {
    state = {
            name: '',
            weight: '',
            age: '',
            description: '',
            // need to get exact id for login button
            // do i have to define this as a variable above?
            // userid: localStorage.getItem('userLogin'),
            userId: '',
            workoutPlanList: [], 
            nestList: []
    }

    componentWillMount() {
            axios.get('/users/5d3664f6d70a300f58a1070d')
            // axios.get(`/users/${id}`)
                    .then(({ data }) => {
                        console.log(data)
                            this.setState({ name: data.name,
                            age: data.age })
                    })
    }







    render() {
            return (
                    <>
                            <div>
                                    {/* <TopNav /> */}
                                    <ProfileTop />
                                    {/* <OccList /> */}
                                    {/* <BottomNav /> */}
                            </div>
                           
                            <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This person name is {this.state.name}.
          Age is {this.state.age}
        </Typography>
      </CardContent>
                    </>
            )
    }
}

export default Profile2