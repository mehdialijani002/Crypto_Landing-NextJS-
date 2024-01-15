import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import style from "../../styles/styles.module.css";

function UpButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.upBtn}>
      {showButton && (
        <button className={style.up} onClick={scrollToTop}>
          <FaArrowUp className={style.upIcon} />
        </button>
      )}
    </div>
  );
}

export default UpButton;
