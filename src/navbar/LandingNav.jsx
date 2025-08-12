import React from "react";
import { Link } from "react-router-dom";

function LandingNav() {
  return (
    <div className="bg-white/50 shadow-md shadow-white flex justify-start items-center h-20 w-full px-6 ">
      <div>
        <Link to="/">
          <img className="h-12" src="/logo.png" alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default LandingNav;
