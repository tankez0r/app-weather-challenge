import { AxiosAdapter } from "./axios.adapter"

const imageSplashBaseParams = { "client_id": "MHDp_OWT7PDNXxAuwvs-n5u36gBZuqfz1Ub014XRXuQ", "lang": "es" }

const imageSplashInstance = new AxiosAdapter({
    baseUrl: "https://api.unsplash.com/",
    params: imageSplashBaseParams
})


export { imageSplashInstance, imageSplashBaseParams }