import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {getFirestore} from '../firebase'

const getItems = (id) => {
    const db = getFirestore();
    const itemsCollection = db.collection('item');

    const item = itemsCollection.doc(id);
    return item.get();
}

const ItemDetailContainer = ( ) => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
    
        getItems(id).then((res) => {
            console.log('existe?: ',res.exists)
            if(res.exists)
                setItem(res.data())
        })
            
    },[id])

    return (
        <div>
            Estoy en el detalle de item {id}
            <ItemDetail item = {item}/>
        </div>
    );
};

export default ItemDetailContainer;
