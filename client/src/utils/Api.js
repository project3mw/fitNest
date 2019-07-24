import axios from "axios"
const CATEGORY_URL = "https://wger.de/api/v2/exercisecategory/?"
const EXERCISE_URL = "https://wger.de/api/v2/exercise/?category="
const EXERCISE_INFO_URL  = "https://wger.de/api/v2/exerciseinfo/"
const EXERCISE_IMG_URL   = "https://wger.de/api/v2/exerciseimage/?exercise="
const QUERY_DEFAULTS = "&status=2&language=2"
const IMAGE_QUERY_DEFAULTS = "&is_main=True"

// Export an object containing methods use for accessing googlebooks API
export default {
  // Get Exercise category
  getExerciseCategory: () => {
    return axios.get(CATEGORY_URL)
  }, 
  // Get Exercise List
  getExerciseList: (id) => {
    console.log(id);
    return axios.get(EXERCISE_URL + id + QUERY_DEFAULTS)
  },
  getExerciseInfo: (id) => {
    console.log(EXERCISE_INFO_URL + id)
    return axios.get(EXERCISE_INFO_URL + id + '/')
  },
  getExerciseImage: (id) => {
    console.log(EXERCISE_IMG_URL + id)
    return axios.get(EXERCISE_IMG_URL + id + IMAGE_QUERY_DEFAULTS)
  }
}