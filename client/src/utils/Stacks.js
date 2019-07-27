import axios from 'axios'

const Stacks = {
    getWorkouts: _ => axios.get('/workouts'),
    getWorkoutsByMuscle: muscle => axios.get(`/workouts/${muscle}`),
    getWorkoutsByMuscles: ( muscle1, muscle2 ) => axios.get(`/workouts/${muscle1}/${muscle2}`),
    getNest: _ => axios.get('/nest'),
    getPlan: _ => axios.get('/plans'),
    postPlan: _ => axios.post('/plans'),
    getUsers: _ => axios.get('/Users'),
    getUser: id => axios.get(`Users/${id}`),
    getFavorites: _ => axios.get(`/Favorites`),
    addFavorite: id => axios.put(`/Workout/${id}`),
    deleteWorkout: id => axios.delete(`/Workout/${id}`)
}

export default Stacks