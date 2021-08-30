import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.BACKEND_URL || 'http://localhost:8080/api/v1'
})

export default instance;