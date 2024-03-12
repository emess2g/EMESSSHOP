import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


const Cart = () => {
  const location = useLocation();
  const [cartItems, setItems] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // If cart items are coming from location.state:
    if (location.state) {
      setItems(location.state);
    }
  }, [location.state]);

  const removeFromCart = (itemId) => {
    setItems(cartItems.filter((item) => item.id !== itemId));
  };

 

  return (

    <div className="cart-container">
      <div className="nav-section cart-nav">
        <h2>Items Added</h2>
      </div>
      {cartItems.length == 0 ? (
        
        <div className="empty-msg">
          <p>Cart is empty</p> 
        </div>
      ) : (
        <div className="cart-main-wrapper">
          <div className="wrapper" >
            {
          cartItems.map(item => 
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
                          <div className="cart-update-wrapper update-link">
                            <button className="update-link" onClick={() => handleCartIncrement(item.quantity)}>+</button>
                            <button className="update-link" onClick={() => handleCartDecrement(item.quantity)}>-</button>
                          </div>
                          <button className="update-link" onClick={(event) => {event.preventDefault(); removeFromCart(item.id);}}> Delete</button>
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
