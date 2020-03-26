import React, { useState } from 'react';
const { Provider, Consumer } = React.createContext();

function PicsContextProvider(props) {
  const [photos, setPhotos] = useState([]);
  return <Provider value={{ photos }}>{props.children}</Provider>;
}

export { PicsContextProvider, Consumer as PicsContextConsumer };
