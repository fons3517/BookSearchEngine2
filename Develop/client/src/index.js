import React from 'react';
import { ReactRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <ReactRouter >
    <App />
  </ReactRouter>,
  document.getElementById('root')
);
