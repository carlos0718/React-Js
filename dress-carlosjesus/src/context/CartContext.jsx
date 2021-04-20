import React, { useEffect, useState } from 'react';

const CartContext = React.createContext([]);

const CartProvider = ({children}) =>{
   const [cart, setCart] = useState([]);
   const [totalItems, setTotalItems] = useState(0);
   const [totalPrecioCart, setTotalPrecioCart] = useState(); 
   
   useEffect(()=>{

      let precio = cart.reduce((acumulador,itemActual)=>{
         const p = itemActual.cant * itemActual.item.price;
         return acumulador + p;
      },0);

      let totalItems = cart.reduce((acumulador,itemActual)=>{
         return acumulador + itemActual.cant;
      },0);
      
         setTotalItems(totalItems);
         setTotalPrecioCart(precio);
   },[cart])

   // agregar cierta cantidad de un ítem al carrito
   const addToItem = (newItem, quantity) =>{

      const indexItem  = cart.findIndex(e => e.item.id === newItem.id)
      if(indexItem < 0){
         setCart(cart =>[...cart,{item:newItem,cant:quantity}])
      }
      else{
         let modifyCart = [...cart];
         modifyCart[indexItem].cant += quantity;
         setCart(modifyCart);
      }
      console.log("cartContext",{cart, newItem, quantity});
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

   return <CartContext.Provider value = {{cart,addToItem,removeItem,clear,isInCart, totalItems,totalPrecioCart}}> {children} </CartContext.Provider>
}

export {CartContext, CartProvider};