import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCont from './itemCont'

const ItemDetail = ({item}) => {
    const [count,setCount] = useState(0);
    const addHandler = (e)=>{
        alert(`Se agregó ${e} articulo(s) al carrito`)
        setCount(e)
    }
    return (
        <div className="card mb-3 itemDetail">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={item.img} alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body cardBody">
                        {count}
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.detail}</p>
                        <h3 className="card-text">$ {item.price}</h3>
                    </div>
                </div>
            </div>
            {
                count === 0 ?
                <div>
                    <ItemCont text = 'Agregar al carrito' 
                    stock = {10} initial = {0} onAdd={addHandler}/>
                </div>
                :
                <div>
                    <Link to = '/cart'>
                        <button type="button" className="btn btn-primary btn-lg btnAdd" >Terminar Compra</button>
                    </Link>
                </div>
                
            }
        </div>
    );
};

export default ItemDetail;