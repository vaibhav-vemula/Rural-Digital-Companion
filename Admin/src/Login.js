import React from "react";
import request from 'superagent';
import { Redirect } from "react-router-dom";


class Login extends React.Component{
    
    constructor(props){
      super(props)
      const token = localStorage.getItem("token");

    let loggedin=true;
    if(token === null){
      loggedin=false
    }

     // var loggedin = false;
      this.state={
        username:"",
        password:"",
        loggedin,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onchange = this.onchange.bind(this);
    }
  
    onchange(e){
      this.setState({
           [e.target.name]: e.target.value
      })
    }

    handleSubmit(event) {
      
      event.preventDefault();

     const ddd={
        userid:this.state.username,
        pass:this.state.password,
      }

        request.post('http://localhost:5000/admin')
                .send(ddd)
                .set('Accept', 'application/json')
                .end((err, res) => {
                    if (err || !res.ok) {
                          console.log('Oh no! error');
                      } 
                    else {
                        //console.log(res.text);
                        if(res.text ==='0')
                        {
                          alert("please enter correct data");
                        }
                        else {
                          localStorage.setItem("token","hello")
                          this.setState({
                            loggedin:true,
                          })
                        }
                  }
            });      
      }

render(){

  if(this.state.loggedin){
      return <Redirect to='/admin' />
      }

    return(
        <>
        

<div className="bac">
   <form className="box" onSubmit={this.handleSubmit}>
        <h1>Admin Login</h1>
        <input type="text" value={this.state.username} name='username' onChange={this.onchange} placeholder="UserID" />
        <input type="password" value={this.state.password} name='password' onChange={this.onchange} placeholder="Password" />
        <input type="submit"/>
    </form>
  
</div>
     
        </>
    );
}
}



export default Login;