import axios from 'axios'

const Stacks = {
    getUsers: _ => axios.get('/Users'),
    getUser: id => axios.get(`Users/${id}`),
    getWorkout: _ => axios.get('/Workout'),
    getNest: _ => axios.get('/Nest'),
    getPlan: _ => axios.get('/Plan'),
    getFavorites: _ => axios.get(`/Favorites`),
    addFavorite: id => axios.put(`/Workout/${id}`),
    deleteWorkout: id => axios.delete(`/Workout/${id}`)
}

export default Stacks