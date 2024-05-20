import { CityInfo } from "../../core/entities/cityInfo.entitie";

export interface FormValues {
    city: string
    latLon: Omit<CityInfo, "name">;
}