import React from "react";

const Nav = props => (
  <div>

    <nav className="navbar fixed-top" style={{ marginBottom: "40px", backgroundColor: "grey", height: "50px" }}>

      <ul className="nav navbar-nav navbar-left">
        <li>
          <a href="/" style={{ color: "white", 
                                textDecoration: "none", 
                                fontSize: "20px" }}>
            Google Books Search
          </a>
        </li>
      </ul>

      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="/savedbooks" style={{ color: "white", 
                                        fontSize: "20px" }}>
            Your Saved Books
          </a>
        </li>
      </ul>

    </nav>

  </div>
);

export default Nav;