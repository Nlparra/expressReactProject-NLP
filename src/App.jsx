import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp"

import List from "./components/List";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path = "/">
            <SignUp/>
            </Route>
            <Route path = "/List" component = { List } />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
