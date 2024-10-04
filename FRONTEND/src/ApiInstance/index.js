import axios from "axios"

const ApiInstance = axios.create({
      baseURL: 'http://localhost:8000',
      responseType: 'json',
})
      
axios.interceptors.request.use(()=>{
      const token = localStorage.getItem('token')
      if(token){
            ApiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }


})
export { ApiInstance }