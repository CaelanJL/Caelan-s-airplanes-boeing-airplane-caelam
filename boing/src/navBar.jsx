import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function navBar() {
    return(
      <nav>
        <ul>
          <li>
            <Link to= '/'>Home</Link>
          </li>
          <li>
            <Link to= '/input'>Input Data</Link>
          </li>
          <li>
            <Link to= '/search'>Search Data</Link>
          </li>
        </ul>
      </nav>
    );
  }

  export default navBar;