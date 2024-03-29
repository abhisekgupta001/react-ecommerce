import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import {CartProvider} from "./Context/CartContext";
import { WishlistProvider } from './Context/WishlistContext';
import { ToastProvider } from './Context/ToastContext';
import {FilterProvider} from "./Context/FilterContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <FilterProvider>
              <ToastProvider>
                <App />
              </ToastProvider>
            </FilterProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
