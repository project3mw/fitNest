import axios from 'axios'

const Stacks = {
    scrape: _ => axios.get('/scrape')
    getStacks: _ => axios.get('/stacks')
    getFavorites: _ => axios.get('/favorites')
    addFavorite: id => axios.put(`/stacks/${id}`)
    deleteStack: id => axios.delete(`/stacks/${id}`)
}

export default Stacks