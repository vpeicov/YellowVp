import React from 'react';
import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import "./Appbar.css";

const { Header } = Layout;

const AppBar: React.FC = () => {
    return (
        <Header className="app-bar">
            <div className="logo">LOGO</div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/nashi'>Nashi</NavLink>
        </Header>
    );
}

export default AppBar;
