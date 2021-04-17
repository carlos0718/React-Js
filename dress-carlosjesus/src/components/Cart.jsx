import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import trash from '../img/trash.svg'

const Cart = () => {

   const {cart,removeItem,clear,totalItems,totalPrecioCart,totalPrecioItem} = useContext(CartContext);

   return (
         <table className="table">
            <thead className="thead-dark">
               <tr>
                  <th style={{width:'500px'}} scope="col">Artículo</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Remove</th>
               </tr>
            </thead>
            {
               !cart.length ?
                  <thead>
                    <tr> NO HAY ITEMS EN EL CARRITO. CLICK  <Link to='/'>AQUI</Link></tr>
                  </thead>
                  
                  :(<tbody>
                     {
                        cart.map(cartItem =>(
                           
                           <tr key={cartItem.item.id}>
                              <td><img src={cartItem.item.img} width="90" height="100" alt='imgItem'/></td>
                              <td>{cartItem.cant}</td>
                              {console.log(cartItem.item.title,cartItem.cant)}
                              <td>{0}</td>{console.log(totalPrecioItem)}
                              <td onClick={()=>removeItem(cartItem.item.id)}><Link to><img src={trash} width="30" height="30" alt="trash" /></Link></td>
                           </tr>
                           
                       ))
                     }
                     </tbody>
                  )
            }
             <thead className="thead-dark">
               <tr>
                  <th style={{width:'500px'}} scope="col">Total</th>
                  <th scope="col">{totalItems} </th>
                  <th scope="col">{totalPrecioCart} </th>
                  <th scope="col" onClick={clear}><Link><img src={trash} width="30" height="30" alt="trash" /></Link></th>
               </tr>
            </thead>
         </table>
   );
};

export default Cart;