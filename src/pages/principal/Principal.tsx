import CityForm from "./components/CityForm"
import WeatherCard from "./components/WeatherCard"

const Principal = () => {
  return (

    <div className="flex justify-center min-h-screen bg-opacity-30 bg-gradient-to-b from-blue-300 to-blue-950">


      <div className="mt-20 basis-11/12">
        <CityForm />
        <WeatherCard />
      </div>



    </div>


  )
}

export default Principal