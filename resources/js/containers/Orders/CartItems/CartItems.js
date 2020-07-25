import React from 'react';
import CartItem from './CartItem/CartItem';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const CartItems = (props) => {
    return (
        <Auxiliary>
            <CartItem key={cartItem.id} subtotal={cartItem.subtotal} delivery={cartItem.delivery}
                      total={cartItem.total} link={cartItem.link} ></CartItem>
        </Auxiliary>
    );
};
export default CartItems;
