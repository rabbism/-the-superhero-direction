import React from 'react';

const Cart = (props) => {
    const {cart}  =props;
    let total =0 ;
    for(const product of cart){
         total = total+ product.salary;
        }
    return (
        <div>
            <h2>New job office</h2>
            <h4>{props.cart.length}</h4>
            <p>${total}</p>
            <button>Submit</button>
        </div>
    );
};

export default Cart;