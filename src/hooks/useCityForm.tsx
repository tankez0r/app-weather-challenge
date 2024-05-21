import { useState } from 'react'
import { SubmitHandler, UseFormHandleSubmit, UseFormSetValue } from 'react-hook-form';
import { cityOption } from '../infraestructure/interfaces/cityOption.interface';
import { FormValues } from '../infraestructure/interfaces/FormValues';
import useGetGeoLocation from './useGetGeoLocation';
import { Istore } from '../infraestructure/interfaces/store.inteface';


interface hookProps {
    handleSubmit: UseFormHandleSubmit<FormValues, undefined>
    setValue: UseFormSetValue<FormValues>
    storage: Istore
}

const useCityForm = ({ setValue, handleSubmit, storage }: hookProps) => {

    const [filteredOptions, setFilteredOptions] = useState<cityOption[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const { setLatLonQuery } = storage
    const { setQueryString, cityOptions } = useGetGeoLocation(storage)


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        setLatLonQuery({ lat: data.latLon.lat, lon: data.latLon.lon, name: data.city, nameSearch: data.latLon.nameSearch })
    };
    const handleInputChange = (inputValue: string) => {
        if (inputValue) {
            setQueryString(inputValue)
            setFilteredOptions(cityOptions);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };
    const handleOptionClick = (option: cityOption) => {
        setValue('city', option.value.name);
        setValue('latLon', option.value)
        setShowSuggestions(false);
        handleSubmit(onSubmit)()
    };



    return (
        { handleInputChange, handleOptionClick, filteredOptions, showSuggestions, onSubmit }
    )
}

export default useCityForm