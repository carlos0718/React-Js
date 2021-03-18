import React from "react";
import ItemCont from "./itemCont";

const ListContainer = (props) => {
    return(
        <div>
            <p>{props.text}</p>
            <ItemCont text = 'Agregar al carrito' 
            numero = {0} stock = {10} initial = {0}/>
        </div>
    );
};

export default ListContainer;