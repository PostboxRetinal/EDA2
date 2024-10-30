import React from 'react';
import PropTypes from 'prop-types';

const GifItem = ({ title, url }) => {
  return (
    <div className="gif-item">
      <h3>{title}</h3>
      <img src={url} alt={title} />
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifItem;
