import React from 'react';

const { Provider, Consumer } = React.createContext();

function PicsContextProvider(props) {
  return <Provider value="">{props.children}</Provider>;
}

export { PicsContextProvider, Consumer as PicsContextConsumer };
