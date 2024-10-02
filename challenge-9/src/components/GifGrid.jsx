import { useDeferredValue } from "react";
import { useEffect } from "react";
import { propTypes } from 'prop-types';

const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9EE68wmo2x5vQQmfjbHe46sJUJ1bp4Qd&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(({ img }) => {
        return {
            id: img.id,
            title: img.title,
            url: img.bitly_url
        }
    });

    return gifs;
}

export const GifGrid = ({ category }) => {
    getGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <p>Hello World</p>
        </>
    )
}

GifGrid.propTypes = {
    category: propTypes.string.isRequired
}

export default GifGrid;