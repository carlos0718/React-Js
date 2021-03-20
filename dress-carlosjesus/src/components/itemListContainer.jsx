import React,{useState,useEffect}  from "react";
import ItemCont from "./itemCont";
import ItemList from "./itemList";

const ItemListContainer = (props) => {
    
    const [items, setItems] = useState([]);

    const itemJson = [
        {
            id : 1,
            title : ' Camperon de mujer con capucha',
            img : 'https://http2.mlstatic.com/D_NQ_NP_856695-MLA42389865272_062020-O.webp,',
            price : '3.700'
        },
        {
            id : 2,
            title : ' Campera Hoodie de hombre',
            img : 'https://http2.mlstatic.com/D_NQ_NP_908376-MLA43772884685_102020-O.webp',
            price : '2.890'
        },
        {
            id : 3,
            title : ' Jean chupin negro',
            img : 'https://http2.mlstatic.com/D_NQ_NP_813380-MLA31112803634_062019-O.webp',
            price : '1.350'
        },
        {
            id : 4,
            title : ' Jeans elastizado mujer',
            img : 'https://http2.mlstatic.com/D_NQ_NP_756033-MLA27778355159_072018-W.webp',
            price : '1.495'
        },
    ];
    
    useEffect(()=>{
    
        const itemPromise = new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(itemJson);
            },2000)
        })
        itemPromise.then((response)=>{
            setItems(response)
        })
    })

    return(
        <div>
            <div className = 'containerItemList'>
                <ItemList items={items}/>
            </div>
            <p>{props.text}</p>
            <ItemCont text = 'Agregar al carrito' 
            numero = {0} stock = {10} initial = {0}/>
        </div>
    );
};

export default ItemListContainer;