import { useEffect, useState } from "react"
import { geoLocationUseCase } from '../core/use-cases/index';
import { weatherAppInstance } from "../config/adapters/http/index"
import { Istore } from "../infraestructure/interfaces/store.inteface";

const useGetGeolocation = (setterInStore: Pick<Istore, "setCityOptions" | "cityOptions">) => {
    const [query, setQueryString] = useState<string>("")


    useEffect(() => {
        if (query.length < 3) {
            setterInStore.setCityOptions([])
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    useEffect(() => {

        const getData = async () => {

            if (query.length < 3) return
            const geoLocation = await geoLocationUseCase(weatherAppInstance, query)
            setterInStore.setCityOptions(geoLocation)

        }
        getData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    return (
        { setQueryString, cityOptions: setterInStore.cityOptions }
    )
}

export default useGetGeolocation