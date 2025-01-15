import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ userD }) => {
  return (
    <div className="p-5 md:pl-10 md:pr-10">
      <nav className="text-[#3D8D40] font-[Sen] font-bold text-xl flex justify-between">
        <div>
          <ul className="flex gap-4 md:gap-6">
            {/* <li>
              <i className="ri-menu-line text-[#1B281B]"></i>
            </li> */}
            {userD.userName == null ? (
              <Link to={"/src/pages/LogIn"}>Log In</Link>
            ) : (
              <li>{userD.userName}</li>
            )}
            <Link to={"/"} className="flex gap-3 items-center">
              <img
                src="/src/assets/images/KK-01.png"
                alt="logo"
                className=" w-8"
              />{" "}
              DoIt
            </Link>
          </ul>
        </div>

        <div className="flex text-[#1B281B] gap-4 md:gap-6 list-none">
          <li>
            <i className="ri-search-line"></i>
          </li>
          <li>
            <i className="ri-microsoft-line"></i>
          </li>
          <li>
            <i className="ri-moon-fill"></i>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
