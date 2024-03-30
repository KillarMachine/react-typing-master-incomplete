import React, { useState } from "react";
import PropTypes from "prop-types";
import Content from "./Content.js";
import { Link } from "react-router-dom";
export default function NavBar(p) {
  return (
    <header>
      <div className="logo">
        <img src={p.imgSrc} />
        <span>{p.title}</span>
      </div>
      <nav>
        <li>
          <Link to={p.btn1}>{p.btn1}</Link>
        </li>
        <li>
          <Link to={p.btn2}>{p.btn2}</Link>
        </li>
        <li>
          <Link to={p.btn3}>{p.btn3}</Link>
        </li>
        <li id="new">
          <Link to={p.btn4}>{p.btn4}</Link>
        </li>
      </nav>
      <div className="mode">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={p.change}
          />
          <label
            className="form-check-label logo"
            htmlFor="flexSwitchCheckDefault"
          >
            Dark Mode
          </label>
        </div>
      </div>
    </header>
  );
}
NavBar.defaultProps = {
  title: "Title",
  btn1: "btn1",
  btn2: "btn2",
  btn3: "btn3",
  btn4: "btn4",
  imgSrc: "images/logo.png",
};
NavBar.propTypes = {
  title: PropTypes.string,
  btn1: PropTypes.string,
  btn2: PropTypes.string,
  btn3: PropTypes.string,
  btn4: PropTypes.string,
  imgSrc: PropTypes.string,
};
