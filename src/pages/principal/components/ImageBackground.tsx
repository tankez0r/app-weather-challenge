import { storage } from "../../../config/store/storage"
import useGetImage from "../../../hooks/useGetImage"


const ImageBackground = () => {
    const { cityImageURL } = useGetImage(storage())
    return (

        <img src={cityImageURL.source} className="relative basis-10/12 w-[100%] h-[100%] rounded-lg -z-10 object-cover" />



    )
}

export default ImageBackground