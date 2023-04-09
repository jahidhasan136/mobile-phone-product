import React from 'react';
import './ProductCart.css'

const ProductCart = ({ product, handleAddToCart }) => {
    const { title, price, rating, thumbnail, description } = product
    return (
        <div className='product-details'>
            <img src={thumbnail} alt="" />
            <h4>Name: {title}</h4>
            <p>Price: {price}</p>
            <button onClick={()=> handleAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCart;