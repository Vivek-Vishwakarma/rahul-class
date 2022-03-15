import React from "react";
import "./nav.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2 className="logoName">The Learning Sphere</h2>
      </div>
      <div className="navDiv">
        <ul className="ulNav">
          <li className="navLinks">Home</li>
          <li className="navLinks">About</li>
          <li className="navLinks">Facilities</li>
          <li className="navLinks">Faculty</li>
          <li className="navLinks">Courses</li>
          <li className="navLinks">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
