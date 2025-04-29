import axios from "axios"

const BASE_URL = "https://restapi.amap.com/v3/weather/weatherInfo"

const API_kEY = '022533a0c47a59b015c6f7366f97f828'

export const getWeatherStation = (city:string) =>{
  const params = {
    city:city,
    key:API_kEY
  }
  return axios.get(BASE_URL,{params})
}
