import { storage } from "../../config/store/storage"
import CityForm from "./components/CityForm"
import WeatherCard from "./components/WeatherCard"

const Principal = () => {
  return (
    <div className="flex justify-center min-h-screen bg-slate-100">

      <div className="self-center basis-11/12">
        {console.log(storage().latLonQuery)}
        <CityForm />
        <WeatherCard />
      </div>


    </div>
  )
}

export default Principal