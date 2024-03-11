import './Product.css'
import {FaStar, FaStarHalf} from 'react-icons/fa'; // icon
import React, { useState, useEffect, } from 'react';
import { fetchProduct } from  './product' //import your API  function
import Navbar from '../navbar/Nav.jsx'
import SearchList from '../search/SearchList.jsx'




const Product = () => {
    const [products, setProducts] = useState([]);

    // fetch data when the render mounts
    async function fetchData() {
        try {
            const data = await fetchProduct();
            setProducts(data);
        } catch (error){
            console.error('Error fetching data:', error);
        }
    }

// useEffect block 
useEffect(() => {
    fetchData();
}, []);

const [cartCount, setCartCount] = useState(0);
const [cartItems, setCartItems] = useState([]);
const [results, setResults] = useState([]);


 const handleAddToCart =  (productId) => {
  setCartCount(c => c + 1);
  const isItemInCart = cartItems.find((cartItem) => cartItem.id === productId)

  if(isItemInCart){
    const updatedCart = cartItems.map((cartItem) => {
        if(cartItem.id === productId){
            return{ ...cartItem, quantity: (cartItem.quantity || 1) + 1}
        }
        return cartItem;
    });
    setCartItems(updatedCart);
  } else {
    setCartItems([...cartItems, {...productId, quantity: 1}]);
  }
};




return (

    <div >

         <Navbar products={products} setResults={setResults} cartCount={cartCount} cartItems={cartItems}/>
         <SearchList  results={results}/>

            <div className="main">

             { products.map((product) => {
                return (
                    
                    <ul className="cards-wrapper" key={product.id}>
                        
                        <li className="cards" >
                        <div className="img-container">
                        <img src={product.image} alt={product.title} />
                        </div>
                        <div className="pro-info">
                        <h4 className='pro-title'>{product.title}</h4>
                        <p className='price'>${product.price}</p>
                        <p className='price'>{product.quantity}</p>
                        <div className="rating">
                         <p className="rating-icon"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /></p>
                         <p className='rate-count'>{product.rating.rate}</p> 
                        </div>
                        <p className='single-line'> Rating: {product.rating.count} </p>
                        </div>
                        <button id='addCart'  className='addCart-btn' onClick={() => handleAddToCart(product)} >Add to cart</button>
                        
                        </li>
                    </ul>
                    
                )
             }) }
            </div>

    </div>
)

}

export default Product;