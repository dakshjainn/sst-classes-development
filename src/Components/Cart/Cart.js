
import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
    const items = useSelector((state) => state.items);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {Object.keys(items).length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {Object.keys(items).map((key) => {
                        const product = items[key];
                        return (
                            <li key={product.id}>
                                <span>{product.title}</span>
                                <br/>
                                <span>{product.quantity}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default Cart;