import React,{useState,useEffect}  from "react";
import { useParams } from "react-router-dom";
import ItemCont from "./itemCont";
import ItemList from "./itemList";

export const itemJson = [
    {
        id : 1,
        category: "Jackets",
        title : ' Camperon de mujer con capucha',
        img : 'https://http2.mlstatic.com/D_NQ_NP_856695-MLA42389865272_062020-O.webp,',
        detail : 'Camperon talle M, es impermeable y cortaviento',
        price : '3.700'
    },
    {
        id : 2,
        category: "Jackets",
        title : ' Campera Hoodie de hombre',
        img : 'https://http2.mlstatic.com/D_NQ_NP_908376-MLA43772884685_102020-O.webp',
        detail : 'Campera talle S, material de algodon',
        price : '2.890'
    },
    {
        id : 3,
        category:'Pants',
        title : ' Jean chupin negro',
        img : 'https://http2.mlstatic.com/D_NQ_NP_813380-MLA31112803634_062019-O.webp',
        detail : 'Jean estilo chupin sport elegante color negro talle 43',
        price : '1.350'
    },
    {
        id : 4,
        category : 'Pants',
        title : ' Jeans elastizado mujer',
        img : 'https://http2.mlstatic.com/D_NQ_NP_756033-MLA27778355159_072018-W.webp',
        detail : 'Jean elastizado talle 38 color celeste',
        price : '1.495'
    },
    {
        id : 5,
        category : 'Shirts',
        title : ' Camisa Manga corta',
        img : 'https://home.ripley.com.pe/Attachment/WOP_5/2005252570453/2005252570453-1.jpg',
        detail : 'Camisa manga corta Navigata floreada fondo azul marino',
        price : '2,600'
    },
    {
        id : 6,
        category : 'Shirts',
        title : ' Camisa manga corta Efron',
        img : '//home.ripley.com.pe/Attachment/WOP_5/2016253689044/2016253689044_2.jpg',
        detail : 'Camisa manga corta Index Efron con diseño de palmeras.',
        price : '2,700'
    },
    {
        id : 7,
        category: "Jackets",
        title : ' Campera sport gris melange',
        img : 'https://s3-us-west-2.amazonaws.com/im-prod-products-images/dcd5a5eb-776b-4721-a85f-bf1a75fba386-1180107793_1.jpeg',
        detail : 'Campera sport gris melange Trial.',
        price : '4,700'
    },
    {
        id : 8,
        category : 'Sports',
        title : ' Conjunto Adidas Teamsports',
        img : 'https://home.ripley.com.pe/Attachment/WOP_5/2020246227359/2020246227359_2.jpg',
        detail : 'Conjunto Adidas buzo tracksuit Teamsports.',
        price : '3,200'
    },

];

const ItemListContainer = (props) => {
    
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
    
        const itemPromise = new Promise((resolve, reject) =>{
            setTimeout(()=>{
                
                resolve(itemJson);
                
            },2000)
        })
        itemPromise.then((response)=>{
            if(id === undefined){
                setItems(response);
            }
            else{
                //console.log(response);
                setItems(response.filter(obj => obj.category === id));

            }
        })
    },[id])
    
    return(
        <div>
            items de la categoria {id}
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