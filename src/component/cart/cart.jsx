import { useLocation } from "react-router-dom";
import "./Cart.css";
import { useState } from "react";


const Cart = () => {
  const location = useLocation();
  const [cartItems, setItems] = useState([location.state]);

  // const handleDelete = (dId) => {
  //   const newItems = [];
  //   items.map((item) => {
  //     if(item.id === dId) {
  //       newItems.push({...item})
  //     } else {
  //       newItems.push(item)
  //     }
  //   })

  //   setItems(newItems)
  // }

  const removeFromCart = (item) => {
    setItems( item => cartItems.filter((_, c) => c !== item))
}



  // const removeFromCart = (item) => {
  //   const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    
  //   if (isItemInCart) {
  //     setItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  //     // if the quantity of the item is 1, remove the item from the cart
  //   } else {
  //     setItems(
  //         cartItems.map((cartItem) => 
  //         cartItem.id === item.id 
  //         ? {...cartItem, quantity: cartItem.quantity - 1}
  //         // if the quantity of the item is > 1, decrease the quantity of the item
  //         : cartItem
  //         )
  //     )
  //   }
  //   }

  return (

    <div className="cart-container">
      <div className="nav-section cart-nav">
        <h2>Items Added</h2>
      </div>
      {location.state == 0 ? (
        <div className="empty-msg">
          <p>Cart is empty</p> 
        </div>
      ) : (
        <div className="cart-main-wrapper">
          <div className="wrapper" >
            {location.state.map(item => 
               (

                  <ul  key={item.id} className="cart-wrapper" >
                    <li className="cart">
                      <div className="product-img-container">
                        <img className="product-img" src={item.image} alt={item.title} />
                      </div>
                      <div className="pro-info">
                        <h4 className="cart-title">{item.title}</h4>
                        <p className="product-desc">{item.description.slice(0, 90)}...</p>
                        <p className="total-row">${item.price}</p>
                        <p className="total-row">{item.quantity}</p>
                      </div>
                    </li>
                    <div className="cart-update-wrapper">
                          <span className="update-link">Update</span>
                          <span className="update-link"  onClick={() => removeFromCart(item)}> Delete</span>
                     </div>
                  </ul>
                  
              )            
            )}
          </div>
          <div className="calculation">
            <div className="payment-summary-title">Order Summary</div>

            <div className="payment-summary-row">
              <div>Items (3): </div>
              <div className="payment-summary-money">
                $4.99
              </div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">
               $4.99
              </div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">
               $4.99
              </div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">
              $4.99
              </div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">
               $4.99
              </div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
