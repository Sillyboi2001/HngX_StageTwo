import React from "react";
import Navbar from "../Navbar/Navar";
import Homepage from "../Homepage/Homepage";

const Hero = ({movie}) => {
  return (
    <div className="text-container">
      <Navbar
        header="MovieBox"
        signin="Signin"
      />
      <div>
        <Homepage randomMovie={movie}/>
      </div>
    </div>
  )
}

export default Hero;
