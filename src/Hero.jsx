import React from "react";
import "./Hero.css";
import Button from "@mui/material/Button";
import shoe from "./assets/shoe.png";
function Hero(){
  return (
    <>
    <section id="hero">
    <div id="hero-part">
    <div className="Headers-Hero">
     <h1 id="heroHeader">
        YOUR FEET 
     
        DESERVE

        THE BEST
     </h1>
     </div>
     <img src={shoe} alt="shoe" id="shoe" />
     </div>
     <div id="content">
     <p id="para">
        Your feet desreve the best and we're to help you with our shoes. Your feet desreve the best and we're to help you with our shoes
     </p>
        <div id="hero-buttons">
        <Button variant="contained" id="shop-now">Shop Now</Button>
        <Button variant="contained" id="shop-now">Category</Button>
        </div>
     </div>
     </section>
    </>
  )
}
export default Hero;