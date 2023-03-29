import axios from "axios"
import { ISendData } from "../../globals/interfaces"

const getJmbgData = async (token: string) => {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  }

  const response = await axios.get(`/api/jmbgData/getData`, config)

  return response.data
}

const getUser = async (token: string) => {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  }

  const response = await axios.get(`/api/user/get`, config)

  return response.data
}

const sendUvjerenje = async (token: string, sendData: ISendData) => {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  }

  const response = await axios.post(`/api/jmbgData/sendUvjerenje`, sendData, config)

  return response.data
}

const sendIzvod = async (token: string, sendData: ISendData) => {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  }

  const response = await axios.post(`/api/jmbgData/sendIzvod`, sendData, config)

  return response.data
}



export const userServices = {
  getJmbgData,
  getUser,
  sendIzvod,
  sendUvjerenje
}