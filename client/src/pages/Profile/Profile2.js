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
// import Stacks from '../../utils/Stacks.js'
import Card from '@material-ui/core/Card';



class Profile2 extends Component {
    state = {
        name: '',
        username: '',
        email: '',
        age: '',
        gender: '',
        weight: '',
        gWeight: '',
        location: '',
        height: '',
        fitLevel: '',
        userId: '',
       
    }
// let userToken = whateverlocalstorage
    componentWillMount() {
            axios.get('/users')
            // axios.get(`/users/${id}`)
                    .then(({ data }) => {
                        this.setState({ 
                                name: data.name, 
                                username: data.username,
                                email: data.email,
                                age: data.age, 
                                gender: data.gender, 
                                height: data.height,
                                weight: data.weight, 
                                gWeight: data.gWeight,
                                fitLevel: data.fitLevel
                        })
                    })
    }


    render() {
            return (
                    <>
                            <div>
                                    {/* <TopNav /> */}
                                    {/* {this.state.}     */}
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