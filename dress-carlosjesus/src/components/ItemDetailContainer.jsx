import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const getItems = (id) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{ resolve({
            id : 2,
            title : ' Campera Hoodie de hombre',
            img : 'https://http2.mlstatic.com/D_NQ_NP_908376-MLA43772884685_102020-O.webp',
            detail : 'Campera talle S, color gris. Material de algodon',
            price : '2.890'
        })},2000)
    })
}

const ItemDetailContainer = ( ) => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        getItems(id) 
        .then((res) => setItem(res))
    },[id])

    return (
        <div>
            Estoy en el detalle de item {id}
            <ItemDetail item = {item}/>
        </div>
    );
};

export default ItemDetailContainer;
