import React, { useState } from 'react';

const CartContext = React.createContext([]);

export const CartProvider = ({children}) =>{
   const [cart, setCart] = useState([]);

   // agregar cierta cantidad de un ítem al carrito
   const addItem = (newItem, newQuantity) =>{

      const {item = null, quantity = 0} = cart.find(e => e.item === newItem.id) || {}

      const newCart = cart.filter(e => e.item.id !== newItem.id);

      setCart([...newCart,{item: newItem, quantity: quantity + newQuantity}])
   }
   // Remover un item del cart por usando su id
   const removeItem = (itemId) => {

      const newCart = cart.filter(e => e.item.id !== itemId);
      setCart(newCart);
   }
   // Remover todos los items
   const clear = () => {
      setCart([])
   }

   const isInCart = (id) =>{
      const currentItem = cart.find(e => e.item.id === id)
      return currentItem ? true : false
   }

   return <CartContext.Provider value = {{cart,addItem,removeItem,clear,isInCart}}> {children} </CartContext.Provider>
}

export default CartContext;