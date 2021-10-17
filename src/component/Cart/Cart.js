import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}  =props;
    let total =0 ;
    for(const product of cart){
         total = total+ product.salary;
        }
    return (
        <div className='cart'>
            <h1>New job office</h1>
            <h2>React Development</h2>
            <p>Total Developer Add: {props.cart.length}</p>
            <p>Total spend cost:  $ {total}</p>
            <button>Submit</button>
        </div>
    );
};

export default Cart;