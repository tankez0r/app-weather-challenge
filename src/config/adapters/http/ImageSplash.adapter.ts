import { AxiosAdapter } from "./axios.adapter"

const imageSplashBaseParams = { "client_id": "", "lang": "es" }

const imageSplashInstance = new AxiosAdapter({
    baseUrl: "https://api.unsplash.com/",
    params: imageSplashBaseParams
})


export { imageSplashInstance, imageSplashBaseParams }
