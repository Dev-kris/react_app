import React from 'react';

//stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Quantity{' '}
          <span className="badge rounded-pill bg-secondary navbar-nav ml-auto">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
