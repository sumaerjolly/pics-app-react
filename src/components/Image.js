import React, { useState, useContext } from 'react';
import { PicsContext } from '../PicsContext';
import PropTypes from 'prop-types';

function Image({ className, img }) {
  const { toggleFavourite, addToCart, cartItems } = useContext(PicsContext);
  const [hovered, setHovered] = useState(false);
  const heartIcon = img.isFavorite ? (
    <i
      className="ri-heart-fill favorite"
      onClick={() => toggleFavourite(img.id)}
    ></i>
  ) : (
    hovered && (
      <i
        className="ri-heart-line favorite"
        onClick={() => toggleFavourite(img.id)}
      ></i>
    )
  );

  // your own method
  // let found = false;
  // for (let i = 0; i < cartItems.length; i++) {
  //   if (cartItems[i].id === img.id) {
  //     found = true;
  //     break;
  //   }
  // }

  // const cartIcon = found ? (
  //   <i className="ri-shopping-cart-fill cart"></i>
  // ) : (
  //   hovered && (
  //     <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
  //   )
  // );

  // better method

  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === img.id);
    if (alreadyInCart) {
      return <i className="ri-shopping-cart-fill cart"></i>;
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

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
      {cartIcon()}
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
