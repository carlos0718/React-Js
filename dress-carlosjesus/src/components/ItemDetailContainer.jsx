import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const getItems = () =>{
    return new Promise(resolve=>{
        setTimeout(()=>{ resolve({
            id : 2,
            title : ' Campera Hoodie de hombre',
            img : 'https://http2.mlstatic.com/D_NQ_NP_908376-MLA43772884685_102020-O.webp',
            detail : 'Campera talle S, material de algodon',
            price : '2.890'
        })},2000)
    })
}

const ItemDetailContainer = ( ) => {
    const [item, setItem] = useState([]);

    useEffect(()=>{
        getItems() 
        .then((res) => setItem(res))
    },[])

    return (
        <div>
            <ItemDetail item = {item}/>
        </div>
    );
};

export default ItemDetailContainer;
