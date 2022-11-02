import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return(
      <nav className = "navbar navbar-expand-lg bg-light">
        <div className = "container-fluid">
          <div className = "collapse navbar-collapse" id = "navbarNav">
              <ul className = "navbar-nav">
                <li className = "nav-item">
                <Link className = "nav-link active" aria-current = "page" to= '/'>Home</Link>
              </li>
              <li className = "nav-item">
                <Link className = "nav-link" to= '/input'>Input Data</Link>
              </li>
              <li className = "nav-item">
                <Link className = "nav-link" to= '/search'>Search Data</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;