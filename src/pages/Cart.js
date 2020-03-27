import React, { useContext } from 'react';
import { PicsContext } from '../PicsContext';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems } = useContext(PicsContext);
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: </p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}

export default Cart;
