import axios from 'axios';

const apiInstance = axios.create({
    baseURL:"http://localhost:8000",
    headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    timeout: 5000,
    withCredentials: true,
    responseType: 'json',
    

})

export { apiInstance}