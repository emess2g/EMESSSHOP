import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Product from './component/products/Product.jsx'
import './index.css'
import ErrorPage from './component/error-pages/error-page.jsx'
import Cart from './component/cart/cart.jsx'

const router = createBrowserRouter([ 

  {
    path: "/",
    element:  <Product />, 
    errorElement: <ErrorPage />
  },
  {
      path: "/cart",
      element: <Cart />,
      errorElement: <ErrorPage />
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
