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
                citySelected: { description: "", humidity: "", name: "", pressure: "", temp: "", temp_max: "", temp_min: "", icon: "" },
                cityImageURL: { alt_description: "asd", blur_hash: "LkJt@]r;MwkD~qM_oyNGxURPtSoc", source: "https://images.unsplash.com/photo-1552799446-159ba9523315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTMzMjV8MHwxfHNlYXJjaHwxfHxjbGltYXxlc3wwfHx8fDE3MTYyMjg2NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
                setQueryNameInStore: (querystring) => set({ queryNameString: querystring }),
                setLatLonQuery: (queryObject) => set({ latLonQuery: queryObject }),
                setCityOptions: (queryArray) => set({ cityOptions: cityOptionsMapper(queryArray) }),
                setCitySelected: (onSelectedCity) => set({ citySelected: onSelectedCity }),
                setCityURL: (querystring) => set({ cityImageURL: querystring }),

            }
        ),




        { name: "store" })
)