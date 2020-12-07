import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <div className="car">
          <NavLink exact to= {props.link}>
          <img src={props.imgsrc} className="card-img-top " alt="..." height="280" />
          </NavLink>
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold text-capitalize">
              {props.title}
            </h5>
            <NavLink activeClassName="menu_active"
                      className="btn btn-outline-primary"
                      exact to={props.link}>
                      Check Now
                    </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Card;