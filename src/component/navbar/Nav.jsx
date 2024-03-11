import "./Nav.css";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { GlobalLoading, showLoading } from "react-global-loading";
import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";


const Navbar = ({ cartCount, cartItems, products, setResults}) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const navigateToCartAdded = () => {
    navigate("/cart", { state: cartItems });
  };

  const show = () => {
    showLoading(true);
    setTimeout(() => {
      showLoading(false);
    }, 1000);
  }; // loading


  const handleSearch = (value) => {
   const results = products.filter((search) => {
      return value && search && search.title && search.title.toLowerCase().includes(value);
    });
    setResults(results)
  }

  const handleChange = (value) => {
    setInput(value);
    handleSearch(value)
  };

  

  return (
    <div className="nav-section">
      <div className="">
        <h2 onClick={show} className="logo">
          emessShop
        </h2>
        <GlobalLoading />
      </div>
      <div className="nav-search-container">
        <FaSearch />
        <Form id="search-form" role="search">
          <input
            type="search"
            aria-label="Search contacts"
            className="search-input"
            placeholder="Search"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </Form>
      </div>
      <div className=" cart-icon">
        <div onClick={navigateToCartAdded}>
          <FaCartPlus />
          <span className="cart-count">{cartCount} </span>
        </div>
      </div>
    </div>
   
  );
};

// Navbar.propTypes = {
//   setResults: PropTypes.arrayOf(PropTypes.shape({ 
//        id: PropTypes.number,
//        name: PropTypes.string,
//   }))
// }

export default Navbar;
