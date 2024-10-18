import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/0day-security-logo2.png";

function Footer() {
  return (
    <footer className="bg-white py-4 px-10 h-fit flex flex-col md:flex-row items-start justify-between">
      <a href="/">
        <img
          src={Logo}
          className=" h-[70px] md:h-[170px] aspect-auto cursor-pointer"
        />
      </a>

      <ul className="flex flex-col text-[15px] font-bold justify-start gap-5 py-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#73026b]" : "text-black hover:text-[#73026b]"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/offering"
            className={({ isActive }) =>
              isActive ? "text-[#73026b]" : "text-black hover:text-[#73026b]"
            }
          >
            Offering
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#73026b]" : "text-black hover:text-[#73026b]"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#73026b]" : "text-black hover:text-[#73026b]"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <ul className="flex flex-col text-[15px] font-bold justify-start gap-5 py-10">
      <li>
          <a target="_blank" href="https://www.linkedin.com/company/0-daysecurity/" className="text-black hover:text-[#73026b]">
            Linkedin
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-[#73026b]">
            Twitter
          </a>
        </li>
        {/* <li>
          <a href="#" className="text-black hover:text-[#73026b]">
            Instagram
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-[#73026b]">
            Facebook
          </a>
        </li> */}
        
      </ul>
      <ul className="flex flex-col text-[15px] font-bold justify-start gap-5 py-10">
        <li>A3119, 312 W 2nd St</li>
        <li>Casper, WY, Wyoming, US, 8260</li>

        <li> <a href="mailto:support@0daysecurity.io">support@0daysecurity.io</a></li>
        <li><a href='#'>0daysecurity.io</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
