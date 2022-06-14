import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductForm from './components/Admin/ProductForm';
import CartContainer from './components/Cart/CartContainer';
import Navbar from './components/Navbar';
import ProductDetailContainer from './components/ProductDetail/ProductDetailContainer';
import ProductList from './components/ProductList/ProductList';
import { CartProvider } from './contexts/CartContext';

const App: FunctionComponent = () => {
    return(
        <CartProvider>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ProductList />} />
                <Route path='/admin/add' element={<ProductForm />} />
                <Route path='/products/:productId' element={<ProductDetailContainer />} />
                <Route path='/cart' element={<CartContainer/>} />
            </Routes>
        </BrowserRouter>
        </CartProvider>
    )
}

export default App;