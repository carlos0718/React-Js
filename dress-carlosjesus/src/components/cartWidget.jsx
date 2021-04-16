import React from 'react';
import cart from '../img/cart4.svg';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div>
           <Link to = '/cart'> <img src={cart} width="30" height="30" alt="cartwidget"/></Link>
        </div>
    );
};

export default CartWidget;