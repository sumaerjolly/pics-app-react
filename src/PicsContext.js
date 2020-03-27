import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PicsContext = React.createContext();

function PicsContextProvider(props) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
      )
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.log('error is', error);
      });
  }, []);

  function toggleFavourite(id) {
    const updatedArr = photos.map(photo => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      } else {
        return photo;
      }
    });
    setPhotos(updatedArr);
  }

  function addToCart(image) {
    setCartItems(prevState => [...prevState, image]);
  }

  function removeFromCart(id) {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <PicsContext.Provider
      value={{
        photos,
        cartItems,
        toggleFavourite,
        addToCart,
        removeFromCart,
        emptyCart
      }}
    >
      {props.children}
    </PicsContext.Provider>
  );
}

export { PicsContextProvider, PicsContext };
