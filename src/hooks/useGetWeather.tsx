import { useEffect } from "react"
import { weatherDataUseCase } from '../core/use-cases/index';
import { weatherAppInstance } from "../config/adapters/http/index"
import { Istore } from "../infraestructure/interfaces/store.inteface";
import { CityInfo } from "../core/entities/cityInfo.entitie";

const useGetWeather = (setterInStore: Pick<Istore, "latLonQuery" | "setCitySelected" | "citySelected" | "setQueryNameInStore" | "queryNameString">, cityInfo: CityInfo) => {



    useEffect(() => {

        const getData = async () => {
            if (cityInfo.name === "") return
            const getWeatherData = await weatherDataUseCase(weatherAppInstance, cityInfo)

            setterInStore.setCitySelected(getWeatherData)
            setterInStore.setQueryNameInStore(cityInfo.nameSearch)

        }
        getData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityInfo])

    return (
        { citySelectedName: setterInStore.queryNameString, citySelectedWeather: setterInStore.citySelected }
    )
}

export default useGetWeather