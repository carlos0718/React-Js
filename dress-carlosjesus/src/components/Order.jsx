import React, { useState,useContext} from 'react';
import { CartContext } from '../context/CartContext';
import firebase from 'firebase'
import {getFirestore} from '../firebase';
import 'firebase/firestore';


const Order = () => {
  
   const [firstname,setFirstName] = useState('')
   const [lastname,setLastName] = useState('')
   const [phone,setPhone] = useState('')
   const [email,setEmail] = useState('')
   const [emailValidator,setEmailValidator] = useState('')
   const [address,setAddress] = useState('')
   const [idOrden, setIdOrden ] = useState()
   const {cart,totalPrecioCart} = useContext(CartContext);
   console.log("idOrden iniciaalizado :",idOrden)

   const generarOrden = (e) =>{
      e.preventDefault();
      const userBuyer = {firstname,lastname,phone,email,address}
      console.log(userBuyer);
      const db = getFirestore();
      const orderGenerate = db.collection('orders');
      console.log(orderGenerate);
    
      const date = firebase.firestore.Timestamp.fromDate(new Date())
      console.log('date',date);
      const items = cart.map(cartItem => {
         return {id:cartItem.item.id,title:cartItem.item.title,price:cartItem.item.price};
      })
      alert('Orden generada exitosamente')
      console.log('buyer', userBuyer);
      console.log('items', items);
      console.log('total', totalPrecioCart);
      orderGenerate.add({buyer:userBuyer,items,date, total:totalPrecioCart})
      .then(({id}) =>{
         setIdOrden(id);
      })
         
      const itemsToUpdate = db.collection('item').where(
         firebase.firestore.FieldPath.documentId(),'in',cart.map(i=>i.item.id)
      )
      const batch = db.batch();
      itemsToUpdate.get()
      .then(collection=>{
         collection.docs.forEach(docSnapshop=>{
            batch.update(docSnapshop.ref,{
               stock : docSnapshop.data().stock - cart.find(item=>item.item.id === docSnapshop.id).cant
            })
         })
         batch.commit().then(res=>{
         console.log('resultado batch: ',res);
         })
      })

   }
 /*   const handleInputmail=(e)=>{
      if(emailValidator !== email){
         alert('Los mails no son iguales');
      }
   } */
  
   return (
      <div>
          <form className='formulario'>
            <fieldset>
               <legend id='titleForm'>DATOS PERSONALES</legend>
               <div className="row">
                  <div className="col customImput">
                     <input type="text" value={firstname} onChange={e=>setFirstName(e.target.value)} className="form-control" placeholder="First name"/>
                  </div>
                  <div className="col customImput">
                     <input type="text" value={lastname} onChange={e=>setLastName(e.target.value)} className="form-control" placeholder="Last name"/>
                  </div>
               </div>       
               <div className='customImput'>
                  <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} type='email' placeholder="email@example.com"/>
               </div>
                <div className='customImput'>
                  <input className="form-control" value={emailValidator} onChange={e=>setEmailValidator(e.target.value)} type='email' placeholder="repit-email@example.com" /* onBlur={handleInputmail} *//>
                  {email !== emailValidator ? <div className= "validatorMail">mail no coincide con el anterior </div>: true }
               </div>
               <div className='customImput'>
                  <input className="form-control" value={phone} onChange={e=>setPhone(e.target.value)} type='text' placeholder="phone: 157891235"/>
               </div>
               <div className='customImput' id='inputId'>
                  <input className="form-control" value={address} onChange={e=>setAddress(e.target.value)} type='text' placeholder="Address"/>
               </div>
            </fieldset>
         </form>
         <button onClick={generarOrden} type="submit" className="btn btn-dark btn-lg btnAdd" >Terminar Compra</button>
         
      </div>
   );
};

export default Order;