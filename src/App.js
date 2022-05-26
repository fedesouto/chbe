import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContainer from './components/Cart/CartContainer';
import Navbar from './components/Navbar';
import ProductDetailContainer from './components/ProductDetail/ProductDetailContainer';
import ProductList from './components/ProductList/ProductList';

const App = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ProductList />} />
                <Route path='/detail' element={<ProductDetailContainer />} />
                <Route path='/cart' element={<CartContainer/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;