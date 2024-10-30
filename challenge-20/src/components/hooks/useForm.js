import React, { useState } from 'react'

export const useForm = ( initialState = {}) => {
    const [ formState, setFormState] = useState( initialstate )

    const onInputChange = ( evt ) => {
        const { name, value } = evt.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState ( initialstate )
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
