import React, { useEffect } from "react";
import "./bannerSlidder.css";
// import leftArrow from "./icons/left-arrow.svg";
// import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  useEffect(() => {
    console.log("logged");
  }, []);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <span>{direction === "next" ? "Next" : "Prev"}</span>
    </button>
  );
}
