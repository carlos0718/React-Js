import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import ItemCont from './itemCont'

const ItemDetail = ({item}) => {
    const [count,setCount] = useState(0);
    const {addToItem} = useContext(CartContext);

    const addArticulo = (e)=>{
        //alert(`Se agregó ${e} articulo(s) al carrito`)
        const count = Number(e);
        addToItem(item, count);
        setCount(count);
    }
    console.log('setCount',setCount);
    return (
        <div className="card mb-3 itemDetail">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img id='img-detail' src={item.img} alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body cardBody">
                        <h5 className="card-title item-title">{item.title}</h5>
                        <p className="card-text item-title">{item.detail}</p>
                        <h3 className="card-text item-price">$ {item.price}</h3>
                    </div>
                </div>
            </div>
            {
                count === 0 ?
                <div>
                    <ItemCont text = 'Agregar al carrito' 
                    stock = {10} initial = {1} onAdd={addArticulo}/>
                </div>
                :
                <div>
                    <NavLink exact to = '/cart'>
                        <button type="button" className="btn btn-dark btn-lg btnAdd" >Ir al carrito</button>
                    </NavLink>
                </div>
                
            }
        </div>
    );
};

export default ItemDetail;