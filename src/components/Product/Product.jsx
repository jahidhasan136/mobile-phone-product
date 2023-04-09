import React, { useState } from 'react';
import './Product.css'
import { useLoaderData } from 'react-router-dom';
import ProductCart from '../ProductCart/ProductCart';
import OrderSummary from '../OrderSummary/OrderSummary';

const Product = () => {
    const product = useLoaderData()
    const products = product.products;

    const [cart, setCart] = useState([])

    const handleAddToCart = order =>{
        const addCart = [...cart, order]
        setCart(addCart)
    }

    const handleDeletCart = id => {
        const dltCart = cart.filter(dlt => dlt.id !== id)
        setCart(dltCart)
    }

    return (
        <div className='product-container'>
            <div className='product-cart'>
                {
                    products.map(product => <ProductCart key={product.id} product={product} handleAddToCart={handleAddToCart}></ProductCart>)
                }
            </div>
            <div>
                <OrderSummary cart={cart} handleDeletCart={handleDeletCart}></OrderSummary>
            </div>
        </div>
    );
};

export default Product;