import React from "react";
import Timecard from "./Timecard";
import Today from "./Today";
import villagelist from './villageslist';
import request from 'superagent';
 
class Timeline extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      village:'Chikkabanavara',
      tod:[],
      oth:[]

    }
    this.vill = this.vill.bind(this);

  }
 
  vill(e) {
      var r=e.target.value;
      console.log(r);
      
      this.setState({
          village:r,
        })
      

     
        const url=`http://localhost:5000/gettimeline/${r}`;
         
      request
        .get(url)
        .set('Accept', 'application/json')
        .end((err, res) => {
          if (err || !res.ok) {
            console.log('Oh no! error');
          } else {
            console.log('Success');
            console.log(res.body.today);
            this.setState({
              tod:res.body.today,
              oth:res.body.other
            })

          }
        });
        console.log(this.state.tod);   
     }

     componentDidMount(){
      const url=`http://localhost:5000/gettimeline/${this.state.village}`;
      request
        .get(url)
        .set('Accept', 'application/json')
        .end((err, res) => {
          if (err || !res.ok) {
            console.log('Oh no! error');
          } else {
            console.log('Success');
            console.log(res.body.today);
            this.setState({
              tod:res.body.today,
              oth:res.body.other
            })
          }
        });
     }
        

  
  

  render(){
  
  return (
    <>
    <div className="fulll">
    
    <div className="hea"><h1>Timeline</h1></div>
   <div className="hea">
    <label className="labb" >Select Village -&nbsp;&nbsp;</label>
           <select value={this.state.village} onChange={this.vill}>
              {villagelist.map((vData,i) => (
                 <option key={i} value={vData}>{vData}</option>
                  ))}
           </select>
       </div>
  <div className="containerr">
  
  <div className="timeline">
      <ul>
      <li className="firs">
        <Today dat={this.state.tod}/>
      </li>
      
      {this.state.oth.map((data,i) => (
                <Timecard key={i} data={data} />
            ))}
      </ul> 
  </div>
  </div></div>
    </>
  );
  }
};
 
export default Timeline;