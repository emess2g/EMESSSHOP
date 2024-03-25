
import {CiShoppingCart } from "react-icons/ci";
import { FaSearch} from "react-icons/fa";
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
    console.log(results);
    setResults(results)

  }

 const handleChange = (value) => {
    setInput(value);
    handleSearch(value)
  };


  

  return (
    <div className="w-full flex  justify-around items-center p-2 bg-[rgb(237,206,53)]">
      <div className="">
        <h2 onClick={show} className="font-semibold">
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
          <CiShoppingCart className="text-[2.5rem]  "/>
          <span className="absolute lg:right-[5.4rem] md:right-[5rem]  sm:text-sm text-black font-semibold top-[1rem] right-[2.5rem]" >{cartCount} </span>
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
