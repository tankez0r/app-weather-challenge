import { HttpAdapter } from "../../config/adapters/http/http.adapter"
import { imageResults } from "../../infraestructure/interfaces/imageSplash.response"
import { imageDataMapper } from "../../infraestructure/mappers/imageMapper"
import { imageURL } from "../entities/ImageURL.entitie"





export const getImageUseCase = async (fetcher: HttpAdapter, query: string): Promise<imageURL> => {


    try {
        const imageData = await fetcher.get('/search/photos', {
            "query": query
        })
        return imageDataMapper(imageData as imageResults)[0]

    } catch (error) {
        throw new Error('error fetching: "get Image"')
    }


}
