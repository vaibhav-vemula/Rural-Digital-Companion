import React from "react";
import { NavLink } from "react-router-dom";
import fin from "../images/fin.png";
const Navbar = () => {
  return (
    <>
    
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-11 mx-auto ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink exact className="navbar-brand font-weight-bold " to="/">
                   <img src={fin}  alt="logo" height='70' />
              </NavLink>
              
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/"
                    >
                      Home 
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/services"
                    >
                      Services
                    </NavLink>
                  </li>
 
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      Important
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      Register
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Navbar;