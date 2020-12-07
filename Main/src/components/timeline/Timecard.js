
import React from "react";


const Timecard = ({data}) => {
    return(
        <>
      <li className="sha">
        <div className="timeline-content expan">
          <h3 className="date">{data.date}</h3>
          <h1>{data.head}</h1>
          <p>{data.bod}</p>
        </div>
      </li>
    </>
    );
};

export default Timecard;