import React, { useState, useContext } from 'react';
import { PicsContext } from '../PicsContext';

function Image({ className, img }) {
  const { toggleFavourite } = useContext(PicsContext);
  const [hovered, setHovered] = useState(false);
  const heartClass = img.isFavorite
    ? 'ri-heart-fill favorite'
    : 'ri-heart-line favorite';
  const heartIcon = hovered && (
    <i onClick={() => toggleFavourite(img.id)} className={heartClass}></i>
  );
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

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

export default Image;
