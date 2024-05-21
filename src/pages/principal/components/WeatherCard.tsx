import useGetWeather from "../../../hooks/useGetWeather"
import ImageBackground from "./ImageBackground"
import twObject from "../twClasses/WeatherCard.tw"
import { Istore } from "../../../infraestructure/interfaces/store.inteface"



const WeatherCard = ({ storage }: { storage: Istore }) => {

    const { citySelectedName, citySelectedWeather } = useGetWeather(storage, storage.latLonQuery)

    const { description, temp, temp_max, temp_min, humidity, icon, pressure } = citySelectedWeather

    return (
        <div className={twObject.container} id="container">
            <ImageBackground storage={storage} />
            <div className={twObject.cardContainer} id="cardContainer">
                <div className={twObject.iconDescriptionContainer} id="iconDescriptionContainer">
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className={twObject.icon} id="icon" />
                    <span className={twObject.description}>{description}</span>
                </div>
                <span className={twObject.temp} id="temp">{temp} C°</span>

                <div className={twObject.citySelectedName} id="citySelectedNameContainer">
                    <span>{citySelectedName}</span>
                </div>

                <div className={twObject.maxMinContainer}>
                    <div className={twObject.maxMinText}>
                        <span className="relative"> Minima: {temp_min}C°</span>
                        <hr />
                        <span className="relative"> Maxima: {temp_max}C°</span>
                    </div>
                    <div className={twObject.maxMinText}>
                        <span className="relative"> Humedad: {humidity}%</span>
                        <hr />
                        <span className="relative"> Presión Atmosferica: {pressure}hPA</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default WeatherCard