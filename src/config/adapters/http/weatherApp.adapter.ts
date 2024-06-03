import { AxiosAdapter } from "./axios.adapter"

const weatherBaseParams = { "appid": "" }
const weatherAppInstance = new AxiosAdapter({
    baseUrl: "http://api.openweathermap.org",
    params: weatherBaseParams
})


export { weatherAppInstance, weatherBaseParams }
