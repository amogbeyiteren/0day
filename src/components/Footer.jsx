import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo2.png"

function Footer() {
  return (
    <footer className="bg-white py-4 px-10 h-fit flex flex-col md:flex-row items-center justify-between">
    <a href='/' >
    <img
      src={Logo}
      className='h-[170px] aspect-auto cursor-pointer'
      />
      </a>

      <ul className="flex flex-col text-[15px] font-bold justify-start gap-5 py-10">
        <li>
          <Link to="/" className="text-[#73026b] hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/offering" className="text-black hover:text-gray-400">Offering</Link>
        </li>
        <li>
          <Link to="/about" className="text-black hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-black hover:text-gray-400">Contact</Link>
        </li>
      </ul>

      <ul className="flex flex-col text-[15px] font-bold justify-start gap-5 py-10">
        <li>
          <a href="#" className="text-[#73026b] hover:text-gray-400">Facebook</a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-gray-400">Twitter</a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-gray-400">Instagram</a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-gray-400">Linkedin</a>
        </li>
      </ul>
      <ul className="flex flex-col text-[15px] font-bold justify-start gap-5 py-10">
        <li>
          416 887 5555
        </li>
        <li>
          123 address st.
        </li>
        <li>
          email@example.com
        </li>
        <li>
          yourwebsite.com
        </li>
      </ul>
      
        </footer>

  );
}

export default Footer;
