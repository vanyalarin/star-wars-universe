  import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const aplication = (
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>  
  </BrowserRouter>
)

ReactDOM.render(aplication,document.getElementById('root')
);

reportWebVitals();
