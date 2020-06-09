import React from 'react';
import { Provider } from "react-redux";
import store from "./store";

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{display:"flex", alignItems:"center", padding:50}}>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div style={{paddingLeft:50, paddingRight:50}}>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
