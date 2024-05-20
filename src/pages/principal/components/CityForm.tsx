import { ChangeEvent, FocusEvent } from 'react';
import { useForm } from 'react-hook-form';
import twObject from '../twClasses/CityForm.tw';
import useCityForm from '../../../hooks/useCityForm';
import { FormValues } from '../../../infraestructure/interfaces/FormValues';

const CityForm = () => {
    const { register, handleSubmit, setValue } = useForm<FormValues>();

    const { filteredOptions, handleInputChange, handleOptionClick, showSuggestions, onSubmit } = useCityForm({ setValue, handleSubmit })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={twObject.container}>

            <div className={twObject.container} id='container'>
                <label className={twObject.label} htmlFor="city">
                    Escribe el Nombre de la Ciudad
                </label>

                <input
                    className={twObject.input}
                    type="text"
                    placeholder="Escribe y selecciona una opción"
                    {...register('city')}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
                    onFocus={(e: FocusEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
                    autoComplete='off'
                />
                <input type="text" hidden={true} {...register('latLon')} />
                {showSuggestions && filteredOptions.length > 0 && (
                    <ul className={twObject.ul}>
                        {filteredOptions.map((option, index) => (
                            <li
                                key={`${index} ${option.label}`}
                                className={twObject.li}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option.label as unknown as string}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </form>
    );
};

export default CityForm;