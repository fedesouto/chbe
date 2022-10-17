import React, { createContext, useContext, useState } from "react";
import { createOrder } from "../api/Cart/Carts";
import {baseUrl} from "../api/config";
import { useUser } from "./UserContext";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const { user: usr } = useUser();

  const submitOrder = async () => {
    try {
      const payload = await createOrder(cart._id)
      return payload;
    } catch (error) {
      throw error;
    }
  }

  return (
    <CartContext.Provider value={{ cart, setCart, submitOrder }}>
      {children}
    </CartContext.Provider>
  );
};
