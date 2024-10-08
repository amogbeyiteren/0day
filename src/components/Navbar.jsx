import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../assets/logo1.png";

function Navbar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  // Function to toggle mobile nav
  const toggleMobileNav = () => {
    setOpenMobileNav(!openMobileNav);
  };

  return (
    <div className="flex flex-col w-full">
      <nav className="bg-transparent p-4 h-32 flex flex-row items-center justify-between">
        {/* Links for Desktop */}
        <ul className="hidden md:flex flex-row text-[15px] font-bold justify-start gap-5">
          <li>
            <Link to="/" className="text-black hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/offering" className="text-black hover:text-gray-400">
              Offering
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <a href="/" className="h-full">
          <img src={Logo} className="h-full aspect-auto cursor-pointer" alt="Logo" />
        </a>

        {/* Contact Button for Desktop */}
        <Link
          to="/contact"
          className="hidden w-[170px] h-[50px] bg-[#73026b] hover:opacity-70 text-white text-[15px] font-bold rounded-sm md:flex justify-center items-center"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileNav}
          className="md:hidden w-[50px] h-[50px] hover:opacity-70 text-black text-[15px] font-bold rounded-sm flex justify-center items-center"
        >
          {openMobileNav ? <IoMdClose size={30} /> : <CiMenuBurger size={30} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {openMobileNav && (
        <nav onClick={toggleMobileNav} className="bg-white shadow-md md:hidden absolute top-[128px] left-0 right-0 ">
          <div className="flex flex-col items-center py-4 px-8 w-full">
            <ul className="space-y-4 w-full">
              <li className="w-full border-b-[1px] border-b-gray-200">
                <Link to="/" className="text-black leading-10  hover:text-[#73026b]">
                  Home
                </Link>
              </li>
              <li className="w-full border-b-[1px] border-b-gray-200">
                <Link to="/offering" className="text-black leading-10 hover:text-[#73026b]">
                  Offering
                </Link>
              </li>
              <li className="w-full border-b-[1px] border-b-gray-200">
                <Link to="/about" className="text-black leading-10 hover:text-[#73026b]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black leading-10 hover:text-[#73026b]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Section with Icons (Mobile View) */}
          <div className="flex justify-between space-x-8 py-4 border-t border-gray-200">
            <div className="text-center border-r border-gray-200 w-full">
              <FaPhoneAlt className="text-3xl text-gray-700 mx-auto" />
              <p className="text-gray-700 mt-2">Call us</p>
            </div>
            <div className="text-center w-full">
              <FaMapMarkerAlt className="text-3xl text-gray-700 mx-auto" />
              <p className="text-gray-700 mt-2">Find us</p>
            </div>
            <div className="text-center border-l border-gray-200 w-full">
              <FaEnvelope className="text-3xl text-gray-700 mx-auto" />
              <p className="text-gray-700 mt-2">Email us</p>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
