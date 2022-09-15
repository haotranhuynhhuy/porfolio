import React from "react";
import "./menu.scss";
export default function Menus({menuOpen, onMenuOpen}) {
  return (
    <div className={`menu ${menuOpen && `active`}`}>
      <ul>
        <li onClick={onMenuOpen}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={onMenuOpen}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={onMenuOpen}>
          <a href="#works">Works</a>
        </li>
        <li onClick={onMenuOpen}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={onMenuOpen}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
