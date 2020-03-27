import React, { useContext } from 'react';
import { PicsContext } from '../PicsContext';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems } = useContext(PicsContext);
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));
  const total = cartItemElements.length * 5.99;
  const totalCostDisplay = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay} </p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}

export default Cart;
