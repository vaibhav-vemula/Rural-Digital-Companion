import React from "react";
import Todaycard from "./Todaycard";

const Today =({dat}) => {

    return(
        
        <>
        
      <div className="timeline1">
      <div>
          <h3>Today's Timeline</h3>
      </div>
      <ul>
      {dat.map((data,i) => (
                <Todaycard key={i} data={data} />
            ))}
      </ul> 
  </div>
    </>
    );   
};


export default Today;