
export const getGifs = async( category ) => {
    // const url = 'https://api.unsplash.com/search/photos/?query=nature&page=1&per_page=9&client_id=3d4a2ea5ae14623132c311f9eca021c616b9c73ab517a25f5e047870a7ba29fc';
    const url = `https://api.unsplash.com/search/photos/?query=${ encodeURI( category ) }&page=1&per_page=20&client_id=3d4a2ea5ae14623132c311f9eca021c616b9c73ab517a25f5e047870a7ba29fc`;
    const resp = await fetch( url );

    const { results } = await resp.json();
    // utilizando la desestructuración estamos llamando
    // solamente a la variable results de la respuesta

    const gifs = results.map ( img => {

        return {

            id : img.id,
            title: img.alt_description,
            url: img.urls?.thumb  // urls.small, urls.regular, urls.full,
            // el signo ? es para preguntar a la petición que si trae
            // el parámetro urls continue con el siguiente parámetro
            // .small y si no viene pues que no continue así no nos devuelve un undefined 
        }
    })

    // console.log( gifs );
    // setImages( gifs );
    return gifs;
}