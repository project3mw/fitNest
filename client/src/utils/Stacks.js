import axios from 'axios'

const Stacks = {
    scrape: _ => axios.get('/scrape'),
    getWorkout: _ => axios.get('/Workout'),
    getNest: _ => axios.get('/Nest'),
    getPlan: _ => axios.get('/Plan'),
    addFavorite: id => axios.put(`/stacks/${id}`),
    deleteStack: id => axios.delete(`/stacks/${id}`)
}

export default Stacks