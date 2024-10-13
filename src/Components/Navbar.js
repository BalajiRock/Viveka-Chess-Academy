import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closenav = ()=>{
    setMenuOpen(false);
  }
  return (
    <nav>
      <Link to="/" className="title">
        Viveka Chess Academy
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" onClick={closenav} >Home</NavLink>
        </li>
        <li>
          <NavLink to="/about"  onClick={closenav} >About</NavLink>
        </li>
        <li>
          <NavLink to="/contact"  onClick={closenav} >Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};