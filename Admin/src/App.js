import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./Admin";
import Login from "./Login";

class App extends React.Component {
  
  render(){
    return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/admin" component={Admin} />
        <Redirect to="/" />
      </Switch>
    </>
    );
  }
}
 
export default App;