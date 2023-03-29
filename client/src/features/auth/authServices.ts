import axios from "axios"
import { ILoginData, IRegisterData } from "../../globals/interfaces"

// 'http://localhost:5001'
const login = async (userData: ILoginData) => {

    const response = await axios.post('/api/user/login', userData)

    if (response.data){
        localStorage.setItem('jwt', JSON.stringify(response.data.token))
    }
        
    return response.data
}

const register = async (userData: IRegisterData) => {

  const response = await axios.post('/api/user/create', userData)

  if (response.data){
      localStorage.setItem('jwt', JSON.stringify(response.data.token))
  }
      
  return response.data
} 

const logout = async (token: string) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

    await axios.post('/api/user/logout', undefined, config)
    localStorage.removeItem('jwt')
}
export const authServices = {
    login,
    logout,
    register
} 