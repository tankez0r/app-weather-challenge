import { CityInfo } from "../../core/entities/cityInfo.entitie";
import { IgeolocationResponse } from "../interfaces/geolocation.response";


export const geoLocationMapper = (geoLocations: IgeolocationResponse[]): CityInfo[] => {
    return geoLocations.map(({ name, state, lat, lon, country }) => ({ name: `${name}, ${state == undefined ? "" : state + ","} ${country}.`, lat, lon, nameSearch: `${name}, ${state == undefined ? "" : state}` }))
}