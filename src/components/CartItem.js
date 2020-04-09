import React, { useState, useContext } from 'react';
import { PicsContext } from '../PicsContext';
import PropTypes from 'prop-types';

function CartItem({ item }) {
  const [hovered, setHovered] = useState(false);
  const { removeFromCart } = useContext(PicsContext);

  const iconClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

  return (
    <div className="cart-item">
      <i
        onClick={() => removeFromCart(item.id)}
        className={iconClassName}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default CartItem;
