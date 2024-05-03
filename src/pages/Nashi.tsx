import React from 'react';
import AppBar from './Appbar'; // Импортируем AppBar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList'; // Импортируем компонент ProductList
import './Nashi.css'; // Импортируем файл стилей для Nashi
import './ProductList.css';
const Nashi: React.FC = () => {
    return (
        <div>
            <AppBar />
            <div className="nashi-content">
                <h1>......</h1>
            </div>
            <div className="product-list-container">
                <ProductList />
            </div>
        </div>
    );
}

export default Nashi;
