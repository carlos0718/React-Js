import React from 'react';

const Item = (item) => {

    return (
        <div className = "card itemCard">
            <img className = "card-img-top" src = {item.img} alt=""/> 
                <div className = "card-body">
                    <h4 className = "card-text">{item.title}</h4>
                    <h6 className = "card-subtitle mb-2 text-muted"> {item.price}</h6>
                </div>
        </div>
    )
};

export default Item;