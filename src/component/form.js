import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import http from "../http/http";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      error: false
    }
  }

  nameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({name}));
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.name) {
      this.setState(() => ({error: true}))
    }
    else {
      this.setState(() => ({ error: true }))
      if (this.props.add) {
        http.addName(this.state.name);
      }
      this.props.history.push("/");
    }
    
  }
  
  render() {
    return (
      <div>
        {this.state.error && <p>Name is required.</p>}
        <form onSubmit = {this.onSubmit}>
          <label>Name</label>
          <input 
          value = {this.state.name}
          type="text"
          autoFocus
          onChange = {this.nameChange}
          placeholder = "Name"
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}