import React, { useState } from 'react';

const CartContext = React.createContext([]);

const CartProvider = ({children}) =>{
   const [cart, setCart] = useState([]);
  /*  const [totalItems, setTotalItems] = useState(0);
   const [totalPrecio, setTotalPrecio] = useState(0); */
   

   // agregar cierta cantidad de un ítem al carrito
   const addToItem = (newItem, quantity) =>{

      const indexItem  = cart.findIndex(e => e.item.id === newItem.id)
      if(indexItem < 0){
         setCart(cart =>[...cart,{item:newItem,cant:quantity}])
      }
      else{
         let modifyCart = [...cart];
         modifyCart[indexItem].cant += quantity;
      }
      console.log({cart, newItem, quantity});
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

   return <CartContext.Provider value = {{cart,addToItem,removeItem,clear,isInCart}}> {children} </CartContext.Provider>
}

export {CartContext, CartProvider};