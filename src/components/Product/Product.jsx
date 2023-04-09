import React from 'react';
import './Product.css'
import { useLoaderData } from 'react-router-dom';
import ProductCart from '../ProductCart/ProductCart';

const Product = () => {
    const product = useLoaderData()
    const products = product.products
    console.log(products)
    return (
        <div className='product-container'>
            <div className='product-cart'>
                {
                    products.map(product => <ProductCart key={product.id} product={product}></ProductCart>)
                }
            </div>
            <div>
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Product;