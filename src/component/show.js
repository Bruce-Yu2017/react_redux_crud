import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import http from "../http/http";
import { getAllName } from "../action/action";

import { connect } from 'react-redux';


class Show extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    http.getAllName()
      .then((res) => {
        this.props.dispatch(getAllName(res.data));
      })
      .catch((err) => {
        console.log('err: ', err);
      })
  }

  newRow = (props) => {
    return (
      props.names.map((name, i) => {
        return (
          <tr key={i}>
            <td>{name.name}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        )
      })
    )
  }

  render() {
    const row = this.newRow(this.props);
    return (
      <div>
        <NavLink to="/add">Add an author</NavLink>
        {
          this.props.names.length !== 0 &&
          <div>
            <p>We have quotes by:</p>
            <table>
              <tbody>
                <tr>
                  <th>Author</th>
                  <th>Action</th>
                </tr>
                {row}
              </tbody>
            </table>
          </div>
        }


      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    names: state.names
  }
}

Show = connect(mapStateToProps)(Show);
export default Show;