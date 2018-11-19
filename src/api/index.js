import axios from 'axios'
import constants from '../common/constants'


export default () => {
  return axios.create({baseURL: constants.APIURL})
}