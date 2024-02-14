import './Nav.css'
import { FaCartPlus } from 'react-icons/fa';
import { GlobalLoading, showLoading } from 'react-global-loading';
import { useState } from 'react';


const Navbar = ({ cartCount }) => {

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
    <input type="text"  placeholder='search items...' />
    </div>
    <div className=" cart-icon">
        <FaCartPlus />
        <span  className='cart-count'>{cartCount} </span>
    </div>


 </div>
   )
}


export default Navbar;