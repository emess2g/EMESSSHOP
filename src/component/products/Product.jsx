import { FaStar, FaStarHalf } from "react-icons/fa"; // icon
import React, { useState, useEffect } from "react";
import { fetchProduct } from "./product"; //import your API  function
import Navbar from "../navbar/Nav.jsx";
import {  ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customId = "custom-id-yes";

const Product = ({}) => {
  const [products, setProducts] = useState([]);

  // fetch data when the render mounts
  async function fetchData() {
    try {
      const data = await fetchProduct();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // useEffect block
  useEffect(() => {
    fetchData();
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState();

  const handleAddToCart = (productId) => {
    setCartCount((c) => c + 1);
  
    const notify = () => {
          toast("Item added", {
            toastId: customId,
            position: "bottom-left",
            autoClose: 1000,
          });
        };
    setMessage(notify);
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.id === productId.id
    );
    if (isItemInCart) {
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.id === productId.id) {
          return { ...cartItem, quantity: (cartItem.quantity || 1) + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...productId, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Navbar
        products={products}
        setResults={setResults}
        cartCount={cartCount}
        cartItems={cartItems}
      />
      <ToastContainer  />

      <div className="grid lg:grid-cols-4  gap-6 md:grid-cols-3  bg-[#e5e5e5] sm:grid grid-cols-2 p-2">
        {results.length != 0
          ? results.map((product) => {
              return (
                <ul className="grid bg-[#fefefe] rounded p-2 " key={product.id}>
                  <li className="grid items-end justify-center justify-items-center ">
                    <div className="w-[50%] flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-[100%] "
                      />
                    </div>
                    <div className="justify-items-center">
                      <h4 className="font-semibold text-sm ">
                        {product.title}
                      </h4>
                      <p className="">{product.quantity}</p>
                      <div className="flex items-center">
                        <p className="text-[#ff9d00d0] flex">
                          <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                          <FaStarHalf />
                        </p>
                        <p className="font-bold ">{product.rating.rate}</p>
                      </div>
                      <p className=" font-semibold">
                      
                        Rating: {product.rating.count}{" "}
                      </p>
                      <p className="text-[red] font-bold">${product.price}</p>
                    </div>

                    <button
                      id="addCart"
                      className="bg-[#ff9d00d0] p-2 w-[80%] 
                        rounded hover:bg-[#707072]"
                      onClick={() => handleAddToCart(product)}
                    >
                      <p className="text-[#111111] font-semibold">
                        Add to cart{" "}
                      </p>
                    </button>
                  </li>
                </ul>
              );
            })
          : products.map((product) => {
              return (
                <ul className="grid bg-[#fefefe] rounded p-2 " key={product.id}>
                  <li className="grid items-end justify-center justify-items-center ">
                    <div className="w-[50%] flex  ">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-[100%] "
                      />
                    </div>
                    <div className="items-start  border-black justify-items-start">
                      <h4 className="font-semibold text-sm ">
                        {product.title}
                      </h4>
                      <p className="">{product.quantity}</p>
                      <div className="flex items-center">
                        <p className="text-[#ff9d00d0] flex">
                          <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                          <FaStarHalf />
                        </p>
                        <p className="font-semibold">{product.rating.rate}</p>
                      </div>
                      <p className=" font-semibold">
                        {" "}
                        Rating: {product.rating.count}{" "}
                      </p>
                      <p className="text-[red] font-bold">${product.price}</p>
                    </div>

                    <button
                      id="addCart"
                      className="bg-[#ff9d00d0] p-2 w-[80%] rounded "
                      onClick={() => handleAddToCart(product)}
                    >
                      <p className="text-[#111111] font-semibold">
                        {" "}
                        Add to cart{" "}
                      </p>
                    </button>
                  </li>
                </ul>
              );
            })}
      </div>
    </div>
  );
};

export default Product;
