import React from "react";
import "./Notfound.scss";
import { NavLink } from "react-router-dom";
function Notfound() {
  return (
    <div className="container">
      <div className="notfound">
        <h1>404</h1>
        <p>Похоже, ничего не нашлось :(</p>
        <NavLink className="notfoundLink" to={"/"}>
          <button>На главную</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Notfound;
