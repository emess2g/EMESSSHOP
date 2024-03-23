import { useLocation } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Cart = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // If cart items are coming from location.state:
    if (location.state) {
      setCartItems(location.state);
    }
  }, [location.state]);

  const handleAddToCart =  (itemId) => {
    // check in the item is the cart
    const isItemInCart = cartItems.find((item) => item.id === itemId);
    if(isItemInCart){
      setCartItems(
        cartItems.map((item) => 
        item.id === itemId 
        ? {...item, quantity: item.quantity + 1} // increase the qty if the item is already the cart
        : item 
        )
      
    )
    }
  };

// payment functions
 
 
  const getCartTotal = () => {
    return (cartItems.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2)
  }


  const removeFromCart = (itemId) => {
    const isItemInCart = cartItems.find((item) => item.id === itemId);
    
    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== itemId));
      // if the quantity of the item is 1, remove the item from the cart
    } else {
      setCartItems(
          cartItems.map((item) => 
          item.id === itemId
          ? {...item, quantity: item.quantity - 1}
          // if the quantity of the item is > 1, decrease the quantity of the item
          : item
          )
      )
    }
    }
    
    const clearCart = () => {
      setCartItems([]);
    }

    const deleteItem = (itemId) =>{
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    };
 

  return (

    <div className="">
      <div className="w-full py-2 flex justify-around bg-[#e5e5e5] text-[#111111] ">
        <h2>Items Added()</h2>
        <button className="
        px-4 py-2 bg-[#111111] text-white text-xs font-bold uppercase
        rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700
        cursor-pointer" onClick={() => clearCart()}>Clear Cart</button>
      </div>
      {cartItems.length == 0 ? (
        
        <div className="flex justify-center m-[10%] h-[70vh] items-center bg-[#e5e5e5]">
          <div className="">
          <h2>Cart is empty</h2> 
          <Link to="/">
          <button className="
          px-4 py-2 bg-[#111111] text-white text-xs font-bold uppercase
          rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700
          ">Home Page</button>
          </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col  items-start lg:flex-row  ">
          <div className="wrapper" >
            {  cartItems.map(item => (
                  <ul  key={item.id} className="p-2 m-2 shadow-md w-[90%] lg:w-[]" >
                    <li className="flex gap-4 items-center">
                      <div className="w-[40%] lg:w-[20%]">
                        <img src={item.image} alt={item.title} className="" />
                      </div>
                     
                      <div className="">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-[12px]">{item.description.slice(0,90)}...</p>
                        <p className="">${item.price}</p>
                        <div className="">
                          <div className="flex gap-4 items-center">
                          <p className="">Quantity: {item.quantity}</p>
                            <button className="px-4 py-2 bg-[#111111] text-white text-xs font-bold uppercase rounded
                             hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                             onClick={() => handleAddToCart(item.id)}> +</button>

                            <button  className="px-4 py-2 bg-[#111111] text-white text-xs font-bold uppercase
                             rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                              onClick={() => removeFromCart(item.id)}> -</button>
                          </div>
                          <span className='' onClick={(event) => {event.preventDefault(); deleteItem(item.id);}}> 
                          <MdOutlineDeleteOutline className="text-4xl text-[red]" /></span>
                     </div>
                      </div>                 
                    </li>       
                  </ul>   
              ))}
          </div>
          <div className=" flex  justify-center m-2 p-2 shadow-md  w-[60%] text-center">
            <div className=" flex  flex-col gap-1 font-semibold">

             <h2 className="font-semibold "> Order Summary</h2>


            <div className="flex  justify-between ">
              <div>Order total:</div>
              <div className="">
               ${getCartTotal()}
              </div>
            </div>

            <button className='text-white bg-[#111111] p-2  rounded text-nowrap'>
              Place your order
            </button>
          </div>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Cart;
