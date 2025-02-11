import React from "react";
import logo from "../assets/logom.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="flex flex-wrap mx-2 w-10 h-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaFacebook />
        <a href="https://www.instagram.com/xryputraaa_/profilecard/?igsh=MXR6Y3AwenNzZzFrbQ=="><FaInstagram /></a>
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
