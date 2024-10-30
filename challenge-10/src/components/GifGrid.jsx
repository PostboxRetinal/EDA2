import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = async () => {
    const gifList = await getGifs(category);
    setGifs(gifList);
    console.log(gifList);
  };

  useEffect(() => {
    fetchGifs();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <div className="gif-grid">
        {gifs.map(gif => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
