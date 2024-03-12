
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
    <div className="w-full flex  justify-around items-center p-2 bg-[#f1f1f1]">
      <div className="">
        <h2 onClick={show} className="logo">
          emessShop
        </h2>
        <GlobalLoading />
      </div>
      <div className="w-[50%] flex items-center gap-2 bg-[#f1f1f1] rounded border border-[#111111] p-1">
        <FaSearch className="" />
        <Form id="search-form" role="search" className="focus:outline-none">
          <input
            type="search"
            aria-label="Search contacts"
            className="focus:outline-none bg-[#f1f1f1]"
            placeholder="Search"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </Form>
      </div>
      <div className="flex">
        <div  className="flex gap-1 "  onClick={navigateToCartAdded}>
          <FaCartPlus className="text-2xl"/>
          <span className="absolute top-[0] right-10 text-2x bg-[#e5e5e5] rounded px-2" >{cartCount} </span>
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
