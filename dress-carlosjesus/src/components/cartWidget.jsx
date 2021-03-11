import React from 'react';
import cart from '../img/cart4.svg';

const CartWidget = () => {
    return (
        <div>
            <img src={cart} width="30" height="30" alt="cartwidget"/>
        </div>
    );
};

export default CartWidget;