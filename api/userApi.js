/* eslint-disable */
import axios from 'axios'
import API from './util'

const INSTRUCTOR = 'auth'
const INSTRUCTOR_API_URL = `${API.API_URL}/${INSTRUCTOR}`

const token = sessionStorage.getItem('token')
class UserDataService {

    getAllUser() {
        return axios.get(`${INSTRUCTOR_API_URL}/getAllUser`, {
            headers: {
                token: token
            }
        });
    }

    createUser(data) {
        return axios.post(`${INSTRUCTOR_API_URL}`, data, {
            headers: {
                token: token
            }
        });
    }

    deleteUser(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/delete/${id}`, {
            headers: {
                token: token
            }
        });
    }

    getUserById(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`, {
            headers: {
                token: token
            }
        });
    }

    getUserFromToken(token) {
        return axios.put(`${API.API_URL}/me`, {
            headers: {
                token: token
            }
        });
    }
}

export default new UserDataService()