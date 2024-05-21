import { useEffect } from "react"
import { getImageUseCase } from '../core/use-cases/index';
import { imageSplashInstance } from "../config/adapters/http/index"
import { Istore } from "../infraestructure/interfaces/store.inteface";

const useGetImage = (setterInStore: Pick<Istore, "setCityURL" | "queryNameString" | "cityImageURL">) => {

    const { queryNameString, setCityURL, cityImageURL } = setterInStore


    useEffect(() => {

        const getData = async () => {

            if (queryNameString.length < 3) return
            const imageURL = await getImageUseCase(imageSplashInstance, queryNameString)
            setCityURL(imageURL)

        }
        getData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryNameString])

    return (
        { cityImageURL }
    )
}

export default useGetImage