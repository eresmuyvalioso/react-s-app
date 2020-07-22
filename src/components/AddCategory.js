import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        // hace que al presionar intro o hacer submit
        // en el formulario no se dispare el evento por defecto
        // refrescando la página

        // console.log(inputValue.trim().length);

        if ( inputValue.trim().length > 1 ) {

            setCategories( elementos => [ inputValue, ...elementos ] );
            setInputValue( '' );
        }

    }

    const handleInputClear = () => {
        setInputValue( '' );
    }


    return (
        <form className="buscador" onSubmit={ handleSubmit }>
          <input
            type="text"
            placeholder= "Search images of ..."
            value={ inputValue }
            onChange={ handleInputChange }
            onFocus={ handleInputClear }
          />
          <svg className="lupa" version="1.1" viewBox="0 0 32 32" width="20" height="20" aria-hidden="false"><path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"></path></svg>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
