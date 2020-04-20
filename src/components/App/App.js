import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Get from '../Get/Get'
import Put from '../Put/Put'
import Del from '../Delete/Del'
import Upd from '../Update/Upd'

import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="AppComponent">
        <nav>
          <Link to="/">
            <img
              src="http://pngimg.com/uploads/pokeball/pokeball_PNG24.png"
              alt=""
            />
            <h1>Pokemon CRUD API</h1>
          </Link>
          <Link to="/get">
            GET
          </Link>
          <Link to="/post">
            POST
          </Link>
          <Link to="/update">
            UPDATE
          </Link>
          <Link to="/delete">
            DELETE
          </Link>
        </nav>
        <main>
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route
            path="/get"
            exact
            component={Get}
          />
            <Route
            path="/post"
            exact
            component={Put}
          />
          <Route
            path="/delete"
            exact
            component={Del}
          />
          <Route
            path="/update"
            exact
            component={Upd}
          />
        </main>
      </div>
    );
  }
}

export default App;
