import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Istore } from "../../infraestructure/interfaces/store.inteface";
import { cityOptionsMapper } from "../../infraestructure/mappers/cityOptionsMapper";




export const storage = create<Istore, [["zustand/persist", unknown]]>(
    persist(
        (set) =>
        (
            {
                queryNameString: "",
                cityOptions: [],
                latLonQuery: { lat: "", lon: "", name: "", nameSearch: "" },
                citySelected: { description: "", humidity: "", name: "", pressure: "", temp: "", temp_max: "", temp_min: "" },
                setQueryNameInStore: (querystring) => set({ queryNameString: querystring }),
                setLatLonQuery: (queryObject) => set({ latLonQuery: queryObject }),
                setCityOptions: (queryArray) => set({ cityOptions: cityOptionsMapper(queryArray) }),
                setCitySelected: (onSelectedCity) => set({ citySelected: onSelectedCity })

            }
        ),




        { name: "store" })
)