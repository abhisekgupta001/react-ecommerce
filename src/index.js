import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import {CartProvider} from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
