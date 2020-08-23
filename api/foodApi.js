/* eslint-disable */
import axios from 'axios'
import API from './util'

const INSTRUCTOR = 'foods'
const INSTRUCTOR_API_URL = `${API.API_URL}/${INSTRUCTOR}`
const token = sessionStorage.getItem('token')

class FoodDataService {

    getAllFood() {
        return axios.get(`${INSTRUCTOR_API_URL}`, {
            headers: {
                token: token
            }
        });
    }

    createFood(data) {
        return axios.post(`${INSTRUCTOR_API_URL}`, data, {
            headers: {
                token: token
            }
        });
    }

    deleteFood(id, image_id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/delete/${id}/${image_id}`, {
            headers: {
                token: token
            }
        });
    }

    updateFood(id, data) {

        return axios.patch(`${INSTRUCTOR_API_URL}/update/${id}`, data, {
            headers: {
                token: token
            }
        });
    }

    getFoodFromId(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`, {
            headers: {
                token: token
            }
        });
    }


}

export default new FoodDataService()