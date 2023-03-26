import axios from "axios"

const getJmbgData = async (token: string) => {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  }

  const response = await axios.get(`http://localhost:5001/api/jmbgData/getData`, config)

  return response.data
}


export const userServices = {
  getJmbgData
}