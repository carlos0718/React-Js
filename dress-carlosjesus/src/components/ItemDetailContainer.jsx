import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {itemJson} from './itemListContainer'


const ItemDetailContainer = ( ) => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const getItems = new Promise(resolve=>{
            setTimeout(()=>{
                resolve(itemJson)
            },2000)
        })
        getItems.then((res) => {
            console.log(res)
            setItem(res.find(obj => obj.id === Number(id)))
        });
            
    },[id])

    return (
        <div>
            Estoy en el detalle de item {id}
            <ItemDetail item = {item}/>
        </div>
    );
};

export default ItemDetailContainer;
