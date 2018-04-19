import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../component/header";
import Show from "../component/show";
import Add from "../component/add";


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Show} exact = {true} />
        <Route path="/add" component={Add} />
        
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter; 
