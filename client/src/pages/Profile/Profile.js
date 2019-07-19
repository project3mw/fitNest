import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import arnold from '../../assets/images/arnold.png'
import { Link } from 'react-router-dom';



class Profile extends Component {
    state = {
            name: '',
            type: '',
            date: '',
            description: '',
            // need to get exact id for login button
            // do i have to define this as a variable above?
            // userid: localStorage.getItem('userLogin'),
            userId: '',
            workoutPlanList: [], 
            nestList: []
    }
    componentWillMount() {
            workoutPlanList.getSome(1)
                    .then(({ data }) => {
                            this.setState({ workoutPlanList: data })
                    })
    }


    handleGetOccasions = event => {
            const userId = this.state.userId
            console.log("Here I am!")
            workoutPlanList.getAll()
    }

    handleSelectImage = (type) => {
            switch ({ type }) {
                    case 'birthday':
                            console.log('birthday')
                            this.document.CardMedia.style.backgroundImage = "url('./assets/images/balloons.png"
                            break
                    case 'wedding':
                            console.log('wedding')
                            this.document.CardMedia.style.backgroundImage = "url('./assets/images/wedding.jpg"
                            break
                    case 'valentines':
                            console.log('valentines')
                            document.body.style.backgroundImage = "url('./assets/images/valentines.jpg"
                            break
                    case 'baby':
                            console.log('baby')
                            document.body.style.backgroundImage = "url('./assets/images/balloons.png"
                            break
                    case 'because':
                            console.log('because')
                            document.body.style.backgroundImage = "url('./assets/images/balloons.png"
                            break
            }
    }

    handleStorage = ({ id, name, type, date, description }) => {
            let cardData = { id, name, type, date, description }
            localStorage.setItem('update', JSON.stringify(cardData))
            this.setState({ ...this.state, currentCard: cardData, isEditing: true })
            console.log(cardData)
        }
    

    handleDeleteWorkoutPlan = (id) => {
            console.log('Here I am!')
            workoutPlanList.deleteOne(id)
                    .then(({ data }) => {
                            this.setState({
                                workoutPlanList: this.state.workoutPlanList.filter(workoutPlan => workoutPlan.id !== id)
                            })
                    })
    }


    render() {
            return (
                    <>
                            <div>
                                    {/* <TopNav /> */}
                                    <ProfileTop />
                                    {/* <OccList /> */}
                                    <BottomNav />
                            </div>
                            {this.state.isEditing ? <EditForm currentworkoutPlan={this.state.currentCard} /> : null}
                            <OccCard
                                    newworkoutplan={this.state.workoutPlanList}
                                    handleSelectChange={this.state.type}
                                    handleStorage={this.handleStorage}
                                    handleDeleteWorkoutPlan={this.handleDeleteWorkoutPlan}
                            />
                    </>
            )
    }
}

export default Profile