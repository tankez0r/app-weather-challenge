import { AxiosAdapter } from "./axios.adapter"


const imageSplashInstance = new AxiosAdapter({
    baseUrl: "https://api.unsplash.com/",
    params: { "client_id": "MHDp_OWT7PDNXxAuwvs-n5u36gBZuqfz1Ub014XRXuQ", "lang": "es" }
})


export { imageSplashInstance }