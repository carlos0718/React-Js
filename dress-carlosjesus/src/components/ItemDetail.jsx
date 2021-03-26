import React from 'react';

const ItemDetail = ({item}) => {
    return (
        <div className="card mb-3 itemDetail">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={item.img} alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body cardBody">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.detail}</p>
                        <h3 className="card-text">$ {item.price}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;