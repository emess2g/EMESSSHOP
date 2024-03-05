import './Nav.css'
import { FaCartPlus } from 'react-icons/fa';
import { GlobalLoading, showLoading } from 'react-global-loading';
import { Form, useNavigate} from 'react-router-dom';

// import { useState } from 'react';
// import {  Link } from 'react-router-dom';


const Navbar = ({ cartCount, cartItems }) => {

  const navigate = useNavigate();
  const navigateToCartAdded = () => {
     navigate('/cart',{state:cartItems} );
  }

    const show = () => {
        showLoading(true);
        setTimeout(() => {
          showLoading(false);
        }, 1000);
    }  // loading 

   return (
    <div className="nav-section">
     <div className="">
        <h2  onClick={show} className='logo'>emessShop</h2>
        <GlobalLoading />
    </div>
    <div className="nav-search-container">
      <Form id="search-form" role="search">
    <input type="search" 
    className={searching ? 'loading' : ''}
    aria-label='Search'
    name='q'
    defaultValue={q}
     placeholder='search...' 
     onChange={(event) => {
      const isFirstSearch = q == null;
      submit(event.currentTarget.form, {
        replace: !isFirstSearch,
      });
     }}
    />
     <div
      id="search-spinner"
      aria-hidden
      hidden={!searching}
    />
    <div
      className="sr-only"
      aria-live="polite"
    ></div>
</Form >
    </div>
    <div  className=" cart-icon">
      <div onClick={navigateToCartAdded}  >
        <FaCartPlus />
        <span  className='cart-count'>{cartCount} </span>
      </div>
  
    </div>
 </div>
   )
}


export default Navbar;