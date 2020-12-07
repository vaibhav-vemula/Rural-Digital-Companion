import React from "react";
import web from "../images/gi.gif";

import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
    
        <div className="container-fluid">
       
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6  order-2 order-lg-1 d-flex flex-column justify-content-center temp">
                  <h1 style={{color:"green"}}>
                     Gramin Digital Bandhu
                    <strong className="brand-name"> </strong>
                  </h1>
                  <h2 className="my-3" style={{color:"red"}}>
                    We are here to make your life easy through SMS!
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/contact" className="btn-get-started scrollto">
                      Register
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-7 order-1 order-lg-3 header-img ">
                  <img src={web} className="img-fluid animated" alt="" />
                </div> 


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
 
export default Home;



 
