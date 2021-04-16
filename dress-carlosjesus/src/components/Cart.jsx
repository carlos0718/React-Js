import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import trash from '../img/trash.svg'

const Cart = () => {

   const {cart,removeItem,clear,totalItems,totalPrecio} = useContext(CartContext);

   return (
         <table className="table">
            <thead className="thead-dark">
               <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Remove</th>
               </tr>
            </thead>
            {
               !cart.length ?
                  <h2><br/> NO HAY ITEMS EN EL CARRITO. CLICK  <Link to='/'>AQUI</Link></h2>
                  :(<tbody>
                     {
                        cart.map(cartItem =>(
                           
                              <tr key={cartItem.item.id}>
                                 <th scope="row"></th>
                                 <td>{cartItem.item.title}</td>
                                 <td>{cartItem.quantity}</td>
                                 <td onClick={()=>removeItem(cartItem.item.id)}><img src={trash} width="30" height="30" alt="trash" /></td>
                              </tr>
                           
                       ))
                     }
                     </tbody>
                  )
            }
         </table>
   );
};

export default Cart;