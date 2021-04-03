import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './cartWidget';


const NavBar = () => {    
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light nav-bar">
          <div className="container-fluid navbar-container-fuid">
            <NavLink exact to ={'/'} activeClassName = 'active' className="navbar-brand" >
              Fashion Station 
            </NavLink>
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
                <NavLink exact to = {`/category/Shirts`} activeClassName = 'active' className="nav-link active" aria-current="page">
                  Shirts
                </NavLink>
                <NavLink exact to = {'/category/Pants'} activeClassName = 'active' className="nav-link">
                  Pants
                </NavLink>
                <NavLink exact to = {'/category/T-Shirts'} activeClassName = 'active' className="nav-link">
                  Shorts
                </NavLink>
                <NavLink exact to = {'/category/Jackets'} activeClassName = 'active' className="nav-link">
                  Jackets
                </NavLink>
                <NavLink exact to = {'/category/Sports' }activeClassName = 'active' className="nav-link">
                  Sports
                </NavLink>
              </div>
            </div>
            <CartWidget/>
          </div>
        </nav>
      </div>
      
    );
};

export default NavBar;