import React from "react";
import { NavLink } from "react-router-dom";
import anim from "../assets/anim.webm";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-base-300 flex items-center justify-between">
      <div className="navbar px-10">
        <div className="flex items-center">
          <a className="btn btn-ghost text-xl">MEME-HUB</a>
          <video autoPlay loop muted className="w-[140px] h-auto mb-4 ml-4">
            <source src={anim} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex-1">
          <ul className="menu menu-horizontal px-1 flex items-center justify-end">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-black ml-6 underline underline-offset-4"
                    : "text-black ml-6"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/MemeGallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-black ml-6 underline underline-offset-4"
                    : "text-black ml-6"
                }
              >
                Meme Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/CraftedMemes"
                className={({ isActive }) =>
                  isActive
                    ? "text-black ml-6 underline underline-offset-4"
                    : "text-black ml-6"
                }
              >
                Crafted Memes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
