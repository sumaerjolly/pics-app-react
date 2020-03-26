import React, { useState, useEffect } from 'react';
import axios from 'axios';

const { Provider, Consumer } = React.createContext();

function PicsContextProvider(props) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
      )
      .then(response => {
        console.log(response);
        setPhotos(response.data);
      })
      .catch(error => {
        console.log('error is', error);
      });
  }, []);

  return <Provider value={{ photos }}>{props.children}</Provider>;
}

export { PicsContextProvider, Consumer as PicsContextConsumer };
