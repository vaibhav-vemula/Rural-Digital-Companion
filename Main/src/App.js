import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Important from "./components/important/Important";
import Register from "./components/Register";
import Services from "./components/services/Services";
import Footer from "./components/Footer";
import Weather from "./components/weather/Weather";
import Timeline from "./components/timeline/Timeline";
import Covid from "./components/covid/Covid";

import { Switch, Route, Redirect } from "react-router-dom";
 
class App extends React.Component {
  
  render(){
    return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={Important} />
        <Route exact path="/contact" component={Register} />
        <Route exact path="/services/weather" component={Weather} />
        <Route exact path="/services/timeline" component={Timeline} />
        <Route exact path="/services/covid19track" component={Covid} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
    );
  }
}
 
export default App;