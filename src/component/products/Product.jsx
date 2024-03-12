
import {FaStar, FaStarHalf} from 'react-icons/fa'; // icon
import React, { useState, useEffect, } from 'react';
import { fetchProduct } from  './product' //import your API  function
import Navbar from '../navbar/Nav.jsx'
import SearchList from '../search/SearchList.jsx'




const Product = ({}) => {
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
  
  const isItemInCart = cartItems.find((cartItem) => cartItem.id === productId.id)

  if(isItemInCart){
    
    const updatedCart = cartItems.map((cartItem) => {
        if(cartItem.id === productId.id){
            console.log(cartItems);
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

            <div className="mt-6 grid grid-cols-2  gap-2 justify-items-center bg-[#e5e5e5]">

             { products.map((product) => {
                return (
                    
                    <ul className="w-[90%] flex flex-col gap-2  items-center bg-[#fefefe] rounded p-2"  key={product.id}>
                        
                        <li className="w-[90%] flex gap-1 flex-col items-start  " >
                        <div className='w-[50%] '>
                        <img src={product.image} alt={product.title}  />
                        </div>
                        <div className="pro-info">
                        <h4 className='font-semibold '>{product.title}</h4>                  
                        <p className='price'>{product.quantity}</p>
                        <div className="flex items-center">
                         <p className="text-[#707072] flex"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /></p>
                         <p className='font-bold'>{product.rating.rate}</p> 
                        </div>
                        <p className='text-[#707072] font-bold'> Rating: {product.rating.count} </p>
                        <p className='text-[#707072] font-bold'>${product.price}</p>
                        </div>
                       
                        <button id='addCart'  className='bg-[#111111] p-2 w-[80%] rounded' onClick={() => handleAddToCart(product)} >
                           <p className='text-[#f1f1f1]'> Add to cart</p>
                        </button>
                        
                        </li>
                    </ul>
                    
                )
             }) }
            </div>

    </div>
)

}

export default Product;