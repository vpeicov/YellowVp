import React from 'react';
import { Layout } from 'antd';
import "./Appbar.css";
import { NavLink } from 'react-router-dom';

const { Header } = Layout;

const AppBar: React.FC = () => {
    return (
        <Header className="app-bar">
            <div className="logo" />
            <NavLink to='/'>Cart</NavLink>
        </Header>
    );
}

export default AppBar;
