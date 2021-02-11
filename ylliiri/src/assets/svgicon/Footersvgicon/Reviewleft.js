import React from "react";
import yllilogo from "../../../assets/images/yllilogo.webp";

export default function Reviewleft() {
  return (
    <div className="review-left">
      <span className="logo">
        <img src={yllilogo} alt="llogo" height="50px" alt="/" />
        <p className="re"> YlliRi</p>
      </span>
      <h2>Contact Us</h2>
      <p>
        Work with us <br />
        support@ylliri.com
      </p>
    </div>
  );
}
