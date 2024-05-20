import { WeatherInfo } from "../../core/entities/weatherInfo.entitie";
import { IweatherResponse } from "../interfaces/weather.response";


export const weatherMap = (weatherData: IweatherResponse): WeatherInfo => {
    const { weather, main, name } = weatherData

    return {
        description: weather[0].description, humidity: main.humidity, name, pressure: main.pressure, temp: main.temp, temp_max: main.temp_max, temp_min: main.temp_min
    }
}