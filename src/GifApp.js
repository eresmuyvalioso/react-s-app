import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp = props => {

    // const [categories, setCategories] = useState(['Nature','Spirituality','Animals']);
    const [categories, setCategories] = useState(['']);
    // const handleAdd = () => {

    //     // categories.push('Textures');
    //     // console.log( categories );
    //     // setCategories([...categories, 'Textures']);
    //     setCategories( elementos => [ ...elementos, 'Textures' ] );
    // };

    // const categories = ['Nature','Spirituality','Animals'];
    return (
        <>
            <h2>Search20images App</h2>
            <AddCategory setCategories={ setCategories } />

            <hr />
            {/* <button onClick={ handleAdd }>Añadir Categoría</button> */}
            <ol>
                {
                    categories.map( category => {
                        // return <GifGrid <li key={ category }> { category } </li>;
                        return <GifGrid 
                            key={ category }
                            category={ category } 
                            />;
                    })
                }
                
            </ol>

            
        </>
    )
}

GifApp.propTypes = {

}

export default GifApp


