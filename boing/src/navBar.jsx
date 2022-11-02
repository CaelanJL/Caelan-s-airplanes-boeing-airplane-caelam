import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function Navbar() {
    return(
      <nav class = "navbar navbar-expand-lg bg-light">
        <div class = "container-fluid">
          <div class = "collapse navbar-collapse">
              <ul class = "navbar-nav me-auto mb-2 mb-lg-0">
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