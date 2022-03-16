import React from "react";
import "./nav.css"
import burger from "../../images/hamburger.png"
const Navbar = () => {
  const handleClick = () => {
    const nav = document.querySelector(".ulNav")
    nav.classList.toggle("new")
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <h2 className="logoName">The Learning Sphere</h2>
      </div>
      <div className="navDiv">
        <img className="hamburger" onClick={handleClick} src={burger} alt="hamburger" />
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
