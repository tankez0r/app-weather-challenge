import CityForm from "./components/CityForm"
import WeatherCard from "./components/WeatherCard"
import { storage } from "../../config/store/storage"

const Principal = () => {
  const store = storage()
  return (

    <div className="flex justify-center min-h-screen bg-opacity-30 bg-gradient-to-b from-blue-300 to-blue-950">


      <div className="mt-20 basis-11/12">
        <CityForm storage={store} />
        <WeatherCard storage={store} />
      </div>



    </div>


  )
}

export default Principal