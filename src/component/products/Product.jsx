import './Product.css'
import {FaStar, FaStarHalf} from 'react-icons/fa'; // icon
import React, { useState, useEffect, createContext} from 'react';
import { fetchProduct } from  './product' //import your API  function
import Navbar from '../navbar/Nav.jsx'

export const CartItems = createContext([]);

const Product = () => {
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
}, []);

const [cartCount, setCartCount] = useState(0);
const [cart, setCart] = useState([]);

 const handleAddToCart =  (dId) => {
  setCartCount(c => c + 1);
  const selectedItem = data.find((d)  => d.id == dId)  
  const addCart = cart.find((c) => c.id === dId)


  if(addCart){
    const updatedCart = cart.map((c) => {
        if(c.id === dId){
            return{ ...c, quantity: (c.quantity || 1) + 1}
        }
        return c;
    });
    setCart(updatedCart);
  } else {
    setCart([...cart, {...selectedItem, quantity: 1}]);
  }

};



return (

    <div >

         <Navbar  cartCount={cartCount} cartItems={cart}/>

        { data ? (

            <div className="main">

             { data.map((d) => {
                return (
                    
                    <ul className="cards-wrapper" key={d.id}>
                        
                        <li className="cards" >
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
                        <button id='addCart'  className='addCart-btn' onClick={() => handleAddToCart(d.id)} >Add to cart</button>
                        
                        </li>
                    </ul>
                    
                )
             }) }
            </div>
        ) : (
            <div className="">
               
            </div>
        )}

        {/* <CartItems.Provider value={cart}>
         <Cart />
        </CartItems.Provider> */}
   
     

    </div>
)

}

export default Product;