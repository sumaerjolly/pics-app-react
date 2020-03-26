import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { PicsContextProvider } from './PicsContext';

ReactDOM.render(
  <PicsContextProvider>
    <Router>
      <App />
    </Router>
  </PicsContextProvider>,
  document.getElementById('root')
);
