import React from 'react';
import AppBar from './Appbar'; // Импортируем AppBar
import ProductList from './ProductList'; // Импортируем компонент ProductList
import './Nashi.css'; // Импортируем файл стилей для Nashi
import './ProductList.css';

const Nashi: React.FC = () => {
    return (
        <div>
            <AppBar />
            <div className="product-list-container">
                <ProductList />
            </div>
        </div>
    );
}

export default Nashi;

