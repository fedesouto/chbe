import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList/ProductList';
import Searchbar from './components/Searchbar';

const App = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Searchbar />
            <ProductList />
        </BrowserRouter>
    )
}

export default App;