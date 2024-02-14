import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Render from './component/products/Product.jsx'
import './index.css'
// import Navbar from './component/navbar/Nav.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
   
    <Render />
  </React.StrictMode>,
)
