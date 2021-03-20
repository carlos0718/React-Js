import React from 'react';
import CartWidget from './cartWidget';

const NavBar = () => {    
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href=" ">
              Clothing Store 
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href=" ">
                  Shirt's
                </a>
                <a className="nav-link" href=" ">
                  Pants
                </a>
                <a className="nav-link" href=" ">
                  T-Shisrt's
                </a>
                <a className="nav-link" href=" ">
                  Jacket's
                </a>
                <a className="nav-link" href=" ">
                  Sportswear
                </a>
              </div>
            </div>
            <CartWidget/>
          </div>
        </nav>
      </div>
      
    );
};

export default NavBar;