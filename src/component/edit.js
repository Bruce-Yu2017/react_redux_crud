import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import http from "../http/http";
import Form from "./form";

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <p>Edit this author</p>
        <Form edit={true} {...this.props}/>
      </div>
    )
  }
}