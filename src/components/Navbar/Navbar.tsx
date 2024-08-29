import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar: React.FC = () => {
  const links: string[] = ["Home", "Careers", "About", "Security"];
  return (
    <div
      className={`text-sm mb-12 md:text-base font-semibold bg-cardBg border-border border rounded-full flex justify-between items-center `}
    >
      <div>
        <img src={logo} alt="logo" className="mx-10" />
      </div>
      <div className="hidden md:flex justify-between items-center">
        {links.map((link: string) => (
          <NavLink
            key={link}
            to={link.toLowerCase()}
            className={({ isActive }) =>
              "rounded-full py-3 px-6 my-6 " + (isActive ? "bg-border" : "")
            }
          >
            {link}
          </NavLink>
        ))}
      </div>
      <div className="mx-6 md:mx-10 my-6">
        <NavLink
          to="login"
          className="rounded-full py-3 px-6 my-6 bg-highlight text-cardBg"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
