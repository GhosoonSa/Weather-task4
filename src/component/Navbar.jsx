import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white grid grid-cols-12">
        <div className="col-span-1">
          <img src="/logoI.png" alt="logo" className="w-24 h-24 ml-20 p-4" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
