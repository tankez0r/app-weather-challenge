import { AxiosAdapter } from "./axios.adapter"


const weatherAppInstance = new AxiosAdapter({
    baseUrl: "http://api.openweathermap.org",
    params: { "appid": "64884f9cefcbee5067933ab904e44caf" }
})


export { weatherAppInstance }