import React from 'react'
import { useFectchGifs } from '../hooks/useFecthGifs';
import { GifFridItem } from './GifFridItem';

export const GifGrid = ({ category }) => {

    const { data:images , loading } = useFectchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__flash"> { loading ? ' loading ...' : category } </h3>
            {/* { loading && <p>Loading ...</p> } */}
            <div className="cardGrill">
                {
                    images.map( ( img ) => (
                        
                        <GifFridItem
                            key= {img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
