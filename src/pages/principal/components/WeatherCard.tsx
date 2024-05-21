import { storage } from "../../../config/store/storage"
import useGetWeather from "../../../hooks/useGetWeather"
import ImageBackground from "./ImageBackground"



const WeatherCard = () => {

    const { citySelectedName, citySelectedWeather } = useGetWeather(storage(), storage().latLonQuery)

    const { description, temp, temp_max, temp_min, humidity, icon, pressure } = citySelectedWeather

    return (
        <div className="absolute z-10 self-center rounded-lg basis-10/12  w-[84%] h-[40%] md:w-[40%]">
            <ImageBackground />
            <div className="relative bottom-[100%]  text-white bg-black  bg-opacity-55 h-[100%]">
                <div className="flex flex-col items-center max-w-24">
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className="relative top-[7%] left-[0%]" />
                    <span className="relative bottom-[5%] left-[3%]">{description}</span>
                </div>
                <span className="relative font-bold text-5xl bottom-[11%] left-[33%] inline">{temp} C°</span>

                <div className="relative font-bold  left-[1%] text-3xl max-w-fit lg:left-[30%]">
                    <span>{citySelectedName}</span>
                </div>

                <div className="absolute bottom-0">
                    <div className="relative bottom-[43%] pl-1 text-l font-semibold ">
                        <span className="relative"> Minima: {temp_min}C°</span>
                        <hr />
                        <span className="relative"> Maxima: {temp_max}C°</span>
                    </div>
                    <div className="relative bottom-[43%] pl-1 text-l font-semibold">
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