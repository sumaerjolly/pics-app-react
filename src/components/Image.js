import React, { useState, useContext } from 'react';
import { PicsContext } from '../PicsContext';

function Image({ className, img }) {
  const { toggleFavourite } = useContext(PicsContext);
  const [hovered, setHovered] = useState(false);
  const heartIcon = hovered && (
    <i
      onClick={() => toggleFavourite(img.id)}
      className="ri-heart-line favorite"
    ></i>
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
