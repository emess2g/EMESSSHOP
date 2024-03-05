import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const location = useLocation();

  console.log(location.state);
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
          <div className="wrapper">
            {location.state.map((d) => {
              return (
              
                  <ul className="cart-wrapper" key={d.id}>
                    <li className="cart">
                      <div className="product-img-container">
                        <img className="product-img" src={d.image} alt="" />
                      </div>
                      <div className="pro-info">
                        <h4 className="cart-title">{d.title}</h4>
                        <p className="product-desc">{d.description}</p>
                        <div className="cart-update-wrapper">
                          <span className="update-link">Update</span>
                          <span className="update-link">Delete</span>
                        </div>
                      </div>
                    </li>
                  </ul>
            
              );
              
            })}
          </div>
          <div className="calculation">
            <div class="payment-summary-title">Order Summary</div>

            <div class="payment-summary-row">
              <div>Items (3): </div>
              <div class="payment-summary-money">
                $4.99
              </div>
            </div>

            <div class="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div class="payment-summary-money">
               $4.99
              </div>
            </div>

            <div class="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div class="payment-summary-money">
               $4.99
              </div>
            </div>

            <div class="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div class="payment-summary-money">
              $4.99
              </div>
            </div>

            <div class="payment-summary-row total-row">
              <div>Order total:</div>
              <div class="payment-summary-money">
               $4.99
              </div>
            </div>

            <button class="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
