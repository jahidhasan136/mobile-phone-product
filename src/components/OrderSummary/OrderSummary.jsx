import React from 'react';

const OrderSummary = ({ cart, handleDeletCart }) => {
    console.log(cart)
    return (
        <div>
            <h3>Order Summary: {cart.length}</h3>
            <div>
                {
                    cart.map(p => <p key={p.id}>{p.title} <button onClick={() => handleDeletCart(cart.id)}>x</button></p>)
                }
            </div>
        </div>
    );
};

export default OrderSummary;