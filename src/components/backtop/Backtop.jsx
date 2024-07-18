import React, { useState } from "react";
import "./Backtop.scss";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function Backtop() {
  const [showBacktop, setShowBacktop] = useState(false);
  window.addEventListener("scroll", function () {
    toggleBacktop();
  });

  function toggleBacktop() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      setShowBacktop(true);
    } else {
      setShowBacktop(false);
    }
  }

  return (
    <div className={showBacktop ? "backtop" : "backtop-show"}>
      <a href="#">
        <MdOutlineKeyboardArrowUp />
      </a>
    </div>
  );
}

export default Backtop;
