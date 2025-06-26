import React from 'react';
import GifGrid from './components/GifGrid';
import './App.css';

const App = () => {
  const categories = ['Linux', 'Colombia'];

  return (
    <div>
      <h1>GIF Search by Categories</h1>
      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};

export default App;
