import React,{useState,useEffect}  from "react";
import { useParams } from "react-router-dom";
import ItemList from "./itemList";
import {getFirestore} from '../firebase';

const ItemListContainer = (props) => {
    
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        
        const db = getFirestore();
        const itemCollection = db.collection('item');
        const filterCategory = id ? itemCollection.where('category','==',id) : itemCollection;

        filterCategory.get().then((querySnapshot)=>{
            if(querySnapshot.size > 0){
                console.log(querySnapshot.docs.map(doc => doc.data()));
                console.log(querySnapshot.docs.map(doc => doc.id));
            }
            else{
                console.log('No results');
            }
            setItems(querySnapshot.docs.map(doc => {
                return { id:doc.id, ...doc.data()}
            }));
        })  
    },[id])
    
    return(
        <div>
            <div className = 'containerItemList'>
                <ItemList items={items}/>
            </div>
            <p>{props.text}</p>
        </div>
    );
};

export default ItemListContainer;