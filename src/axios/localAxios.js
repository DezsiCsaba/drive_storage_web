import axios from "axios";
import {AxiosErrorHandler} from "src/axios/axiosErrorHandler";

const localAxios = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

localAxios.interceptors.request.use(
  localAxios =>{
    return localAxios
  }
)

localAxios.interceptors.response.use((response)=>{
  return response
},(axiosError)=>{
  const errorHandler = new AxiosErrorHandler(axiosError)
  errorHandler.handleAxiosError()

  return Promise.reject(axiosError)
})

export {localAxios}
