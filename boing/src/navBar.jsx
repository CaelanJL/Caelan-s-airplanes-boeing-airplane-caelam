import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return(
      <nav class = "navbar navbar-expand-lg bg-light">
        <div class = "container-fluid">
          <div class = "collapse navbar-collapse" id = "navbarNav">
              <ul class = "navbar-nav">
                <li class = "nav-item">
                <Link class = "nav-link active" aria-current = "page" to= '/'>Home</Link>
              </li>
              <li class = "nav-item">
                <Link class = "nav-link" to= '/input'>Input Data</Link>
              </li>
              <li class = "nav-item">
                <Link class = "nav-link" to= '/search'>Search Data</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;