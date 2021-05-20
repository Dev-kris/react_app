import React, { Component } from 'react';

//stateless functional component
const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill bg-secondary m-2">
            {this.props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
