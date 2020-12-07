import React from "react";


const Todaycard = ({data}) => {
    return(
        <>
      <li>
        <div className="timeline1-content">
          <h3 className="date">{data.time}</h3>
          <h1>{data.head}</h1>
        </div>
      </li>
    </>
    );
};

export default Todaycard;