import React from 'react';

const OrderSummary = ({cart}) => {
    console.log(cart)
    return (
        <div>
            <h3>Order Summary: {cart.length}</h3>
        </div>
    );
};

export default OrderSummary;