import React from "react";
import { Person, Mail } from "@material-ui/icons";
import "./topbar.scss";
function Topbar({menuOpen, onMenuOpen}) {
  return (
    <div className={`topbar ${menuOpen && `active`}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Logo
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+ 12312312</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>@gmaill.com</span>
          </div>
        </div>
        <div className="right">
            <div className="hamburger" onClick={onMenuOpen}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
