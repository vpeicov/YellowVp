import React from 'react';
import { Layout } from 'antd';
import AppBar from './Appbar'; // Импортируем AppBar
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom
import firstImage from '../assets/Nashi.png';
import secondImage from '../assets/davinesLogo.jpg';
import "./Home.css";

const { Content } = Layout;

const Home: React.FC = () => {
    return (
        <Layout>
            <AppBar /> {}
            <Content className="site-layout-content">
                <Link to="/nashi">
                    <div className="image-wrapper">
                        <img src={firstImage} alt="First Image" />
                    </div>
                </Link>
                <Link to="/davines">
                    <div className="image-wrapper">
                        <img src={secondImage} alt="Second Image" />
                    </div>
                </Link>
            </Content>
        </Layout>
    );
}

export default Home;
