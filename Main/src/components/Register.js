import React, { Component} from "react";
import request from 'superagent';
import villagelist from './timeline/villageslist';

const disData=['Bangalore Rural', 'Bangalore Urban'];

class Register extends Component{
 
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      phone:'',
      email:'',
      district:'',
      villagename:'',
    };
    this.namin = this.namin.bind(this);
    this.phonein=this.phonein.bind(this);
    this.emailin=this.emailin.bind(this);
    this.disin=this.disin.bind(this);
    this.viin=this.viin.bind(this);
    this.formSubmit=this.formSubmit.bind(this);
  }
namin(e) {
    this.setState({
      name: e.target.value,
     });
  }
  phonein(e){
    this.setState({
      phone:e.target.value,
    })
  }
  emailin(e){
    this.setState({
      email:e.target.value,
    })
  }
  disin(e){
    this.setState({
      district:e.target.value,
    })
  }
  viin(e){
    this.setState({
      villagename:e.target.value,
    })
  }


  formSubmit(ev) {


   ev.preventDefault()
    
    console.log('starting to submit profile');
      const data = {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        district: this.state.district,
        villagename: this.state.villagename,
      };
      console.log(data);

      request
        .post('http://localhost:5000/person')
        .send(data)
        .set('Accept', 'application/json')
        .end((err, res) => {
          if (err || !res.ok) {
            console.log('Oh no! error');
          } else {
            console.log('Success');
          }
        });  
        alert("Registered Successfully");
        this.setState({
          name: '',
      phone:'',
      email:'',
      district:'',
      villagename:'',

        })   
  }
  
  
  
 render(){
  return (
    <>
      <div className="my-5 " >
        <h1 className="text-center"> Registration Form</h1>
      </div>
      
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div className="container contact_div">
        <div className="row">
      
          <div className="col-md-6 col-10 mx-auto reg">
          
            <form onSubmit={this.formSubmit}>
              <div className="mb-3">
                <label className="form-label colo" >Name <span className="hash">*</span></label>
                <input
                required
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  onChange={this.namin}
                  value={this.state.name}
                  placeholder="name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label colo">Phone <span className="hash">*</span></label>
                <input
                required
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  onChange={this.phonein}
                  value={this.state.phone}
                  placeholder="mobile number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label colo">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  onChange={this.emailin}
              value={this.state.email}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label colo">District <span className="hash">*</span></label>
                <select required className="form-control" value={this.state.district} onChange={this.disin}>
              
                 <option>district name</option>
              {disData.map((disData) => (
                  
                 <option key={disData} value={disData}>{disData}</option>
                  ))}
           </select>
              
              </div>
              <div className="mb-3">
                <label className="form-label colo">Village Name <span className="hash">*</span></label>
                
                <select required className="form-control" value={this.state.villagename} onChange={this.viin}>
                   
                 <option key={1}>district name</option>
              {villagelist.map((villagelist) => (
                 <option key={villagelist} value={villagelist}>{villagelist}</option>
                  ))}
           </select>
              </div>
 
              <div className="col-12 mt-4">
                <button className="btn btn-outline-primary perb" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );}
};
 
export default Register;
