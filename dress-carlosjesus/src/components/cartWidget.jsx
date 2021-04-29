import React, { useContext } from 'react';
import cart from '../img/cart4.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
    const {totalItems} = useContext(CartContext);
    return (
        <div>
           <Link to = '/cart'>
            <div className="totalItems">
                <img  src={cart} width="30" height="30" alt="cartwidget" />
                {totalItems}
            </div>
            </Link>
        </div>
    );
};

export default CartWidget;