import useGetImage from "../../../hooks/useGetImage"
import { Istore } from "../../../infraestructure/interfaces/store.inteface"
import twObject from "../twClasses/ImageBackground.tw"

interface props {
    storage: Istore
}
const ImageBackground = ({ storage }: props) => {
    const { cityImageURL } = useGetImage(storage)
    return (

        <img src={cityImageURL.source} className={twObject.container} />



    )
}

export default ImageBackground