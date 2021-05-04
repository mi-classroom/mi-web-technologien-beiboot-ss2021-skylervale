import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const getAllImages = () => api.get(`/images`)
export const getImageById = id => api.get(`/image/${id}`)

const apis = {
    getAllImages,
    getImageById,
}

export default apis