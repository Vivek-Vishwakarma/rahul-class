import React from "react";
import heroImage from "../../images/header.svg";
import Button from "../Button/Button";
import "./header.css";
const Header = () => {
  return (
<>
    <header className="header">
      <div className="headerText">
        <h2>
          If You Judge a Fish by Its Ability to Climb a Tree, <br />
          It Will Live Its Whole Life Believing that It is Stupid.
        </h2>
        <Button text="Join Now" />
      </div>
      <div className="headerImage">
        <img src={heroImage} alt="Header" />
      </div>
    </header>
    </>
  );
};

export default Header;
