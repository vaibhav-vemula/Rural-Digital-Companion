import React from "react";

import Implinks from "./Implinks";
 
class Important extends React.Component {
  
  render(){
  return (
    <>
       <div className="serback">
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul> 



<h4 className="implink">Important Links</h4>

{Implinks.map((dat) => {
                
 return( 
   <a key={dat.link} href={dat.link}>           
<div className="flip">
    <div className="front" style={{backgroundImage: "url(" + dat.imgsrc + ")"}}>
       
    </div>
    <div className="back">
       <h2>{dat.title}</h2>
       <p>{dat.info}</p>
       <h6>Check now ▶️</h6>
    </div>
</div></a> 
)})}
      </div> 
     
    </>
  );
  }
};
 
export default Important;