import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {itemJson} from './itemListContainer'


const getItems = (id) =>{
    const detail = itemJson.filter(obj=> obj.id === id)
    return new Promise(resolve=>{
        setTimeout(()=>{
            //console.log('SOY ID :',id)
            resolve(detail)
            //console.log('HOLAAA',detail);
            /* id : 2,
            title : ' Campera Hoodie de hombre',
            img : 'https://http2.mlstatic.com/D_NQ_NP_908376-MLA43772884685_102020-O.webp',
            detail : 'Campera talle S, color gris. Material de algodon',
            price : '2.890' */
        },2000)
    })
}

const ItemDetailContainer = ( ) => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    //console.log(id);
    useEffect(()=>{
        getItems(Number(id))
        .then((res) => {
            setItem(res)
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
