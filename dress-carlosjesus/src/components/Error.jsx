import React from 'react';

const Error = () => {
    return (
        <div className="card mb-3" style={{fontSize:'40px'}}> 
            <h1 style={{fontSize:'90px'}}> 404 </h1>
                <div className="card-body">
                    <h3 className="card-title">UPS!...PÁGINA NO ENCONTRADA</h3>
                    <p className="card-text">Parece que ha habido un error con la página que estabas buscando<br/>Es posible que la entrada haya sido eliminada o que la dirección no exista </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
        </div>
    );
};

export default Error;