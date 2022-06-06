import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPanel from './components/Admin/AdminPanel';
import CartContainer from './components/Cart/CartContainer';
import Navbar from './components/Navbar';
import ProductDetailContainer from './components/ProductDetail/ProductDetailContainer';
import ProductList from './components/ProductList/ProductList';

const App: FunctionComponent = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ProductList />} />
                <Route path='/admin' element={<AdminPanel />} />
                <Route path='/:productId' element={<ProductDetailContainer />} />
                <Route path='/cart' element={<CartContainer/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;