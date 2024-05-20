import { CityInfo } from "../../core/entities/cityInfo.entitie";
import { cityOption } from "../interfaces/cityOption.interface";




export const cityOptionsMapper = (cityArray: CityInfo[]): cityOption[] => {

    return cityArray.map((city) => ({ label: city.name, value: { lat: city.lat, lon: city.lon, name: city.name, nameSearch: city.nameSearch } }))
}