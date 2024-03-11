import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ( {children} )  => {
    const [cartItems, setCartItems] = useState([]);


 const handleAddToCart =  (item) => {
// check if item is already in the cart
     const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

  if (isItemInCart) {
         setCartItems( cartItems.map((cartItem) => 
          cartItem.id === item.id 
        //   if the item is already in the cart, increase the quantity of the item
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem //otherwise, return cart item
       )); } else {
        // if the item is not in the cart, add the item
        setCartItems([...cartItems, {...item, quantity: 1}]);
       }
    }

const handleRemoveCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) =>  
    cartItem.id === item.id)

    if (isItemInCart.quantity === 1) {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        // if the quantity of the item is 1, remove item from the cart
    } else {
        setCartItems(
            cartItems.map((cartItem) => cartItem.id === id
            ? {...cartItem, quantity: cartItem.quantity -1}
        // if the quantity od the item is greater than 1, decrease the quantity
            : cartItem)
        )
    }
}

const clearCart = () => {
    setCartItems([])
}

const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
}


return (
    <CartProvider value={{
        cartItems,
        handleAddToCart,
        handleRemoveCart,
        clearCart,
        getCartTotal
    }}>
      {children}
    </CartProvider>
)

}