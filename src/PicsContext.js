import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PicsContext = React.createContext();

function PicsContextProvider(props) {
  const [photos, setPhotos] = useState([]);

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

  return (
    <PicsContext.Provider value={{ photos }}>
      {props.children}
    </PicsContext.Provider>
  );
}

export { PicsContextProvider, PicsContext };
