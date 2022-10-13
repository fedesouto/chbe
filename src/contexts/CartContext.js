import React, { createContext, useContext, useState } from "react";
import {baseUrl} from "../api/config";
import { useUser } from "./UserContext";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user: usr } = useUser();

  const submitOrder = async () => {
    const body = {
      user: {
        username: usr.username,
        name: usr.name,
        phone: usr.phone
      },
    };
    try {
      const response = await fetch(`${baseUrl}api/carritos/${cart.id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      return response
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, submitOrder }}>
      {children}
    </CartContext.Provider>
  );
};
