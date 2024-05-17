
import { imageURL } from "../../core/entities/ImageURL.entitie";
import { imageResults } from "./../interfaces/imageSplash.response"


export const imageDataMapper = (data: imageResults): imageURL[] => {
    const { results } = data


    return results.map(({ urls, alt_description, blur_hash }): imageURL => ({ alt_description, blur_hash, source: urls.regular }))
}