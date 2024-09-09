import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
    <Navbar />
    <div className="header">
           
    <div className="header-contents">
      <h2>
          RESIDENT EVIL VILLAGE: PRE-ORDER NOW!
      </h2>
      <p>Play the latest edition of the epic series in Resident Evil  </p>
      <div className="gap-button">
      <button><a href = './public/resident evil village.mp4'>View Trailer</a></button>
      <button><a  href ="#order">Buy now </a></button>

      </div>
    </div>
  </div>
  </>
  );
};

export default HeroSection;
