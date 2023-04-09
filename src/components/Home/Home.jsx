import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <nav>
            <Link>Home</Link>
            <Link>Product</Link>
            <Link>Rechart</Link>
            <Link>About</Link>
            <Link>Contact</Link>
        </nav>
    );
};

export default Home;