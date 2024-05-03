// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nashi from './pages/Nashi'; // Импортируем компонент Nashi
import { CartProvider } from './pages/CartContext';

const App: React.FC = () => {
    return (
        <Router>
            <CartProvider>
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/nashi" element={<Nashi />} /> {/* Добавляем маршрут для страницы Nashi */}
                {/* Добавьте другие маршруты здесь, если необходимо */}
            </Routes>
            </CartProvider>
        </Router>
    );
}

export default App;
