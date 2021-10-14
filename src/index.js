import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  rootElement
);