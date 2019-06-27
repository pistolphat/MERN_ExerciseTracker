import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Just Exercise</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/create" className="nav-link text-primary">Add New Exercise</Link>
            </li>
            
            <li className="nav-item">
            <Link to="/user" className="nav-link text-white">New User</Link>
            </li>
        </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;