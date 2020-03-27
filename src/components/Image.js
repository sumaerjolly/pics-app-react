import React, { useState, useContext } from 'react';
import { PicsContext } from '../PicsContext';
import PropTypes from 'prop-types';

function Image({ className, img }) {
  const { toggleFavourite, addToCart } = useContext(PicsContext);
  const [hovered, setHovered] = useState(false);
  const heartClass = img.isFavorite
    ? 'ri-heart-fill favorite'
    : 'ri-heart-line favorite';
  const heartIcon = hovered && (
    <i onClick={() => toggleFavourite(img.id)} className={heartClass}></i>
  );
  const cartIcon = hovered && (
    <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
  );

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <img src={img.url} alt="" className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
};

export default Image;
