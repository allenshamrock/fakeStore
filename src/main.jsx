import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from "react-use-cart";
import { AppProvider } from "./UseContext/ContextProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AppProvider>
     <CartProvider>
        <App />
      </CartProvider>
    </AppProvider>
  </React.StrictMode>,
)
