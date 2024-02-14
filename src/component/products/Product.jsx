import './Product.css'
import {FaStar, FaStarHalf} from 'react-icons/fa'; // icon
import React, { useState, useEffect } from 'react';
// import { handleAddToCart} from '../navbar/Nav';
import { fetchProduct } from  './product' //import your API  function
// import Navbar from './component/navbar/Nav.jsx'
import Navbar from '../navbar/Nav.jsx'


const Render = () => {
    const [data, setData] = useState(null);

    // fetch data when the render mounts
    async function fetchData() {
        try {
            const result = await fetchProduct();
            setData(result);
        } catch (error){
            console.error('Error fetching data:', error);
        }
    }

    
// useEffect block 
useEffect(() => {
    fetchData();
    // nav();
}, []);
const [cartCount, setCartCount] = useState(0);

const handleAddToCart = () => {
  setCartCount(cartCount + 1);
  console.log("Hello world")
};



return (
    <div className="">
         <Navbar  cartCount={cartCount}/>
        { data ? (

            <div className="main">

             { data.map((d) => {
                return (
                    
                    <div className="cards-wrapper">
                        
                        <div className="cards">
                        <div className="img-container">
                        <img src={d.image} alt="" />
                        </div>
                        <div className="pro-info">
                        <h4 className='pro-title'>{d.title}</h4>
                        <p className='price'>${d.price}</p>
                        <div className="rating">
                         <p className="rating-icon"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /></p>
                         <p className='rate-count'>{d.rating.rate}</p> 
                        </div>
                        
                        <p className='single-line'> Rating: {d.rating.count} </p>
                        </div>
                        <button id='addCart'  className='addCart-btn' onClick={handleAddToCart} >Add to cart</button>
                        {/* <Navbar /> */}
                        </div>
                    </div>
                )
             }) }
            </div>
        ) : (
            <div className="">
               
            </div>
        )}

    </div>
)

}

export default Render;