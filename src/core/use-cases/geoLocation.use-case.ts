import { HttpAdapter } from "../../config/adapters/http/http.adapter"
import { IgeolocationResponse } from "../../infraestructure/interfaces/geolocation.response"
import { geoLocationMapper } from "../../infraestructure/mappers/geoLocationMapper"
import { CityInfo } from "../entities/cityInfo.entitie"





export const geoLocationUseCase = async (fetcher: HttpAdapter, cityName: string): Promise<CityInfo[]> => {


    try {
        const geoLocationData = await fetcher.get('/geo/1.0/direct', { "q": cityName, "limit": "3" })
        return geoLocationMapper(geoLocationData as IgeolocationResponse[])

    } catch (error) {
        throw new Error('error fetching: "get Geo Location"')
    }


}

