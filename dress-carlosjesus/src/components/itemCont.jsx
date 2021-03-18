import React, { useState } from 'react';
import '../style/style.css'

const ItemCont = (props) => {

    const [value, setValue] = useState(props.initial);

    const suma = () =>{
        setValue(value+1);
    }
    const resta = () =>{
        setValue(value-1);
    }
    const onAdd = ()=> {        
        alert(`Se agregó ${value} articulo(s) al carrito`)
        console.log('asdasdas');
    }
    
    return (
        <div className = "card cardContenedor">
            <div className = "card boxCont">
                <button type="button" className="btn btn-primary btn-sm button" 
                    onClick={(resta)} disabled = {value === props.initial}> - </button>

                <label className = 'lblCont'>{value}</label>
                
                <button type="button" className="btn btn-primary btn-sm button" 
                    onClick = {(suma)} disabled = {value === props.stock } >+</button>
            </div>
            <button type="button" className="btn btn-primary btn-lg btnAdd" 
                onClick = {onAdd} >{props.text}</button>
        </div>
    );
};

export default ItemCont;