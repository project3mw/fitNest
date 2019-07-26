import axios from 'axios'

const Stacks = {
    scrape: _ => axios.get('/scrape'),
    getWorkouts: _ => axios.get('/workouts'),
    getWorkoutsByMuscle: muscle => axios.get(`/workouts/${muscle}`),
    getWorkoutsByMuscles: ( muscle1, muscle2 ) => axios.get(`/workouts/${muscle1}/${muscle2}`),
    getNest: _ => axios.get('/Nest'),
    getPlan: _ => axios.get('/plans'),
    postPlan: _ => axios.post('/plans'),
    addFavorite: id => axios.put(`/stacks/${id}`),
    deleteStack: id => axios.delete(`/stacks/${id}`)
}

export default Stacks