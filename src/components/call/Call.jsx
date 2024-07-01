import React from "react";
import "./Call.scss";
import close from "../../assets/close.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
function Call({ setCall }) {
  return (
    <div>
      <div onClick={() => setCall(false)} className="overlay"></div>
      <div className="call">
        <img onClick={() => setCall(false)} src={close} alt="" />
        <h1>Заполните, и мы перезвоним</h1>
        <input type="text" placeholder="ФИО" />
        <input type="tel" placeholder="телефон" />
        <NavLink to={"/catalog"}>
          <button onClick={() => setCall(false)}>
            Весь каталог <FaArrowRightLong />
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Call;
