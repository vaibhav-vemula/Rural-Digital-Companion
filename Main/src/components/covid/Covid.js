import react from "react";
import disData from "./disData"
import jump1 from "../../images/jump1.png";


const ColoredLine = () => (
  <hr
      style={{
          color: "black",
          backgroundColor: "black",
          height: 5,
          width:190,
          marginLeft:28,
          marginTop:10,
          borderRadius:50
          
      }}
  />
);

class Covid extends react.Component{
 
  constructor(props){
    super(props);
    this.state={
      district : [],
      loading: true ,
      
      active:'',
      confirmed:'',
      recovered:'',
      death:'',
      label:'',

      kactive:'',
      kconfirmed:'',
      krecovered:'',
      kdeath:'',

      iactive:'',
      iconfirmed:'',
      irecovered:'',
      ideath:'',
    }
    
    this.reqEvent=this.reqEvent.bind(this);
  }

  async componentDidMount(){
        const url1 = 'https://api.covid19india.org/state_district_wise.json';
        const url2 = 'https://api.covidindiatracker.com/state_data.json';
        const url3 = 'https://api.covidindiatracker.com/total.json';

        const response = await fetch(url1);
        const data = await response.json();

        const response2 = await fetch(url2);
        const data2 = await response2.json();

        const response3 = await fetch(url3);
        const data3 = await response3.json();
     
        this.setState({
          district : data.Karnataka.districtData,
          loading : false,
          active: data.Karnataka.districtData.Bagalkote.active,
          confirmed:data.Karnataka.districtData.Bagalkote.confirmed,
          recovered:data.Karnataka.districtData.Bagalkote.recovered,
          death:data.Karnataka.districtData.Bagalkote.deceased,
          label:'Bagalkote',

          kactive:data2[1].active,
          kconfirmed:data2[1].confirmed,
          krecovered:data2[1].recovered,
          kdeath:data2[1].deaths,

          iactive:data3.active,
          iconfirmed:data3.confirmed,
          irecovered:data3.recovered,
          ideath:data3.deaths,
     })
  }

  reqEvent(e){
    
    var r = e.target.value;
    
    this.setState({
      active: this.state.district[r].active,
      confirmed: this.state.district[r].confirmed,
      recovered: this.state.district[r].recovered,
      death: this.state.district[r].deceased,
      label:r,
    })


  }


  render(){
    
    if(this.state.loading || !this.state.district){
     return(
       <>
            <div className="loading">
                  <p className="load">Loading.....</p>
            </div>
      </>
    );
            
    }
    
    else
    {
      
    return (
     <>
     <div className="who">
    
     
     
     
     <div className="c1">
       <div className="hh">
       <div className="smm">
       <label className="ll" >Select district -&nbsp;&nbsp;</label>
           <select value={this.state.requested} onChange={this.reqEvent}>
              {disData.map((disData,i) => (
                 <option key={i} value={disData}>{disData}</option>
                  ))}
           </select>
       </div></div>
            <div className="label">
             <label className="l" >{this.state.label}</label>
             </div>
        <div className="first">
              <div className="d1">
                  <div className="head">Active</div>
                  <ColoredLine color="black" />
                  <div className="ff">{this.state.active}</div>
              </div>
              <div className="d2">
                  <div className="head">Confirmed</div>
                  <ColoredLine color="red" />
                  <div className="ff">{this.state.confirmed}</div>
              </div>
           
              <div className="d3">
                  <div className="head">Recovered</div>
                  <ColoredLine color="red" />
                  <div className="ff">{this.state.recovered}</div>
              </div>
              
              <div className="d4">
                  <div className="head">Death</div>
                  <ColoredLine color="black" />
                  <div className="ff">{this.state.death}</div>
              </div>
            </div>
        </div>
           

     
           <div className="c2">

           <div className="fff">
              <label className="l">Karnataka</label>
              </div>
              
              <div className="first">
              
              <img src={jump1} alt="covid" className="imm1"  />
              
              <div className="d1">
                  <div className="head">Active</div>
                  <ColoredLine color="red" />
                  <div className="ff">{this.state.kactive}</div>
              </div>
              <div className="d2">
                  <div className="head">Confirmed</div>
                  <ColoredLine color="red" />
                  <div className="ff">{this.state.kconfirmed}</div>
              </div>
              
              <div className="d3">
                  <div className="head">Recovered</div>
                  <ColoredLine color="red" />
                  <div className="ff">{this.state.krecovered}</div>
              </div>

              <div className="d4">
                  <div className="head">Death</div>
                  <ColoredLine color="black" />
                  <div className="ff">{this.state.kdeath}</div>
              </div>
              <img src={jump1} alt="covid" className="imm2"  />
            </div>
            </div>


            <div className="c3">
            <div className="label">
              <label className="l">India</label>
              </div>
              <div className="first">
              <div className="d1">
                  <div className="head">Active</div>
                  <ColoredLine color="red" />
                  <div className="ff">{this.state.iactive}</div>
              </div>
              <div className="d2">
                  <div className="head">Confirmed</div>
                  <ColoredLine color="red" />
                  <div className="ff">{this.state.iconfirmed}</div>
              </div>

              <div className="d3">
                  <div className="head">Recovered</div>
                  <ColoredLine color="red" />
                  <div className="ff">{this.state.irecovered}</div>
              </div>

              <div className="d4">
                  <div className="head">Death</div>
                  <ColoredLine color="black" />
                  <div className="ff">{this.state.ideath}</div>
              </div>
            </div>
            </div>

    </div>
      </>
    
  );}
 }
}
export default Covid;