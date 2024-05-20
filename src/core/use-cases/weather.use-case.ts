import { HttpAdapter } from "../../config/adapters/http/http.adapter"
import { IweatherResponse } from "../../infraestructure/interfaces/weather.response"
import { weatherMap } from "../../infraestructure/mappers/WeatherMapper"
import { CityInfo } from "../entities/cityInfo.entitie"
import { WeatherInfo } from "../entities/weatherInfo.entitie"





export const weatherDataUseCase = async (fetcher: HttpAdapter, { lat, lon }: Omit<CityInfo, "name">): Promise<WeatherInfo> => {


    try {
        const weatherData = await fetcher.get('/data/2.5/weather', {
            "lat": lat,
            "lon": lon,
            "units": "metric",
            "lang": "es",
        })
        return weatherMap(weatherData as IweatherResponse)

    } catch (error) {
        throw new Error('error fetching: "get weather"')
    }


}
