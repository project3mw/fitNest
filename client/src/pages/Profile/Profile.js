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
            occList: []
    }
    componentWillMount() {
            Occasion.getSome(1)
                    .then(({ data }) => {
                            this.setState({ occList: data })
                    })
    }


    handleGetOccasions = event => {
            const userId = this.state.userId
            console.log("Here I am!")
            Occasion.getAll()
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
    

    handleDeleteOccasion = (id) => {
            console.log('Here I am!')
            Occasion.deleteOne(id)
                    .then(({ data }) => {
                            this.setState({
                                    occList: this.state.occList.filter(occ => occ.id !== id)
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
                            {this.state.isEditing ? <EditForm currentOcc={this.state.currentCard} /> : null}
                            <OccCard
                                    newOcc={this.state.occList}
                                    handleSelectChange={this.state.type}
                                    handleStorage={this.handleStorage}
                                    handleDeleteOccasion={this.handleDeleteOccasion}
                            />
                    </>
            )
    }
}

export default Profile