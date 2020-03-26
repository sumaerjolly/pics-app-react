import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Photos from './pages/Photos';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
