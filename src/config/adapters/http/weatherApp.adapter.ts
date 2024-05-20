import { AxiosAdapter } from "./axios.adapter"

const weatherBaseParams = { "appid": "64884f9cefcbee5067933ab904e44caf" }
const weatherAppInstance = new AxiosAdapter({
    baseUrl: "http://api.openweathermap.org",
    params: weatherBaseParams
})


export { weatherAppInstance, weatherBaseParams }