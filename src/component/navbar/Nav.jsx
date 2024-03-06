import "./Nav.css";
import { FaCartPlus } from "react-icons/fa";
import { GlobalLoading, showLoading } from "react-global-loading";
import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from 'prop-types'

const Navbar = ({ cartCount, cartItems, data }) => {
  const [input, setInput] = useState("");
  const [result , setResult] = useState([])
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
    const result = data.filter((d) => {
      return value && d && d.title && d.title.toLowerCase().includes(value);
    });
    setResult(result)
  };

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
        <Form id="search-form" role="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search Product..."
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
      <div>
        {result.map((r, id) => {
          return <div className="" key={id}>
            {r.title}
          </div>
        })}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setResults: PropTypes.arrayOf(PropTypes.shape({ 
       id: PropTypes.number,
       name: PropTypes.string,
  })),
}

export default Navbar;
