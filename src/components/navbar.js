import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <Link to="/" className="navbar-brands logo">Just Exercise</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id='navbarSupportedContent'>
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/create" className="nav-link text-white newact">New Exercise</Link>
            </li>
            <li className="nav-item">
            <Link to="/user" className="nav-link text-white newact">New User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;