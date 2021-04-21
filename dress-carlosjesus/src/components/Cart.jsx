import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import trash from '../img/trash.svg'

const Cart = () => {

   const {cart,removeItem,clear,totalItems,totalPrecioCart} = useContext(CartContext);

   if(totalItems===0) return( <h1 id="msg-cart">NO HAY ITEMS EN EL CARRITO.<br/> CLICK  <Link to='/'>AQUI</Link></h1>)

   return (
      <div>
         <table className="table">
            <thead className="thead-dark">
               <tr>
                  <th style={{width:'500px'}} scope="col">Artículo</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Remove</th>
               </tr>
            </thead>
           <tbody>
                     {
                        cart.map(cartItem =>(
                           //key={cartItem.item.id}
                           <tr key={cartItem.item.id}>
                                 {console.log('cartItem',cartItem)}
                                 <td><img src={cartItem.item.img} width="90" height="100" alt='imgItem'/></td>
                                 <td>{cartItem.cant}</td>
                                 {console.log(cartItem.item.title,cartItem.cant)}
                                 <td>$ {cartItem.cant * cartItem.item.price}</td>
                                 <td onClick={()=>removeItem(cartItem.item.id)}><Link ><img src={trash} width="30" height="30" alt="trash" /></Link></td>
                           </tr>
                       ))
                     }
                     </tbody>
             <thead className="thead-dark">
               <tr>
                  <th style={{width:'500px'}} scope="col">Total</th>
                  <th scope="col">{totalItems} </th>
                  <th scope="col">$ {totalPrecioCart} </th>
                  <th scope="col" onClick={clear}><Link><img src={trash} width="30" height="30" alt="trash" /></Link></th>
               </tr>
            </thead>
         </table>
         <div>
            <Link to = '/order'>
                <button  type="button" className="btn btn-dark btn-lg btnAdd" >Generar Orden de Compra</button>
            </Link>
        </div>
      </div>
   );
};

export default Cart;
