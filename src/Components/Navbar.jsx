import React, { useContext } from "react";
import { MyContext } from '../Context/SessionContext'

const Navbar = () => {
      let {setToggle, Toggle}= useContext(MyContext)
  return (
    <div className="navbar p-2 flex justify-between items-center bg-amber-100 rounded-2xl absolute w-[98%]">
      <div className="left flex items-center gap-2">
        <div className="logo bg-[#FFBB43] p-2 rounded-xl flex w-[50px] justify-center items-center">
          <i className="ri-alarm-fill text-2xl"></i>
        </div>
        <h1 className="text-2xl font-extrabold">Study Planner</h1>
      </div>

      <div className="right bg-[#FFBB43] p-2 rounded-xl cursor-pointer">
        <p
          className="text-m font-semibold"
          onClick={() => setToggle((prev) => !prev)}
        >
          {Toggle ? `Show Sessions` :`Add Session`}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
