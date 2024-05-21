import { CityInfo } from "../../core/entities/cityInfo.entitie";
import { imageURL } from "../../core/entities/ImageURL.entitie";
import { WeatherInfo } from "../../core/entities/weatherInfo.entitie";
import { cityOption } from "./cityOption.interface";



export interface Istore {
    queryNameString: string,
    latLonQuery: CityInfo
    cityOptions: cityOption[]
    citySelected: WeatherInfo
    cityImageURL: imageURL
    setQueryNameInStore: (by: string) => void,
    setLatLonQuery: (by: CityInfo) => void,
    setCityOptions: (by: CityInfo[]) => void,
    setCitySelected: (by: WeatherInfo) => void
    setCityURL: (by: imageURL) => void,
}