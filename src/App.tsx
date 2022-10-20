import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductForm from "./components/Admin/ProductForm";
import CartContainer from "./components/Cart/CartContainer";
import ChatList from "./components/Chat/ChatList";
import Navbar from "./components/Navbar";
import ProductDetailContainer from "./components/ProductDetail/ProductDetailContainer";
import ProductList from "./components/ProductList/ProductList";
import LoginForm from "./components/User/Login";
import RegisterForm from "./components/User/Register";
import UserPanel from "./components/User/UserPanel";
import { CartProvider } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";

const App: FunctionComponent = () => {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/user" element={<UserPanel />} />
            <Route path="/signup" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/admin/add" element={<ProductForm />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/chat" element={<ChatList />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
