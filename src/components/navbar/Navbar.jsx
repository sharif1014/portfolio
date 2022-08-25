import React, { useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
import { MdClose } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="logo">
          <a href="/">
            Port <span>Folio.</span>
          </a>
        </div>
        <div className={!showMenuIcon ? "menu" : "mobileMenu"}>
          <ul className="menuList">
            <li className="menuItem">
              <a href="/">Home</a>
            </li>
            <li className="menuItem">
              <a href="/about">About</a>
            </li>
            <li className="menuItem mobileMenuItem">
              <a href="/skills">Skills</a>
            </li>
            <li className="menuItem mobileMenuItem">
              <a href="/services">Services</a>
            </li>
            <li className="menuItem mobileMenuItem">
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div
          className={!showMenuIcon ? "hambergerIcon" : "closeIcon"}
          onClick={() => {
            setShowMenuIcon(!showMenuIcon);
          }}
        >
          {!showMenuIcon ? <HiMenu /> : <MdClose />}
        </div>
        <div className="socialSection">
          <ul className="socialList">
            <li className="sicialItem facebook">
              <a href="https://www.facebook.com">
                <FaFacebookF />
              </a>
            </li>
            <li className="sicialItem twitter">
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li className="sicialItem whatsapp">
              <a href="https://www.whatsapp.com">
                <ImWhatsapp />
              </a>
              <span className="whatsappContent">+8801823116946</span>
            </li>
            <li className="sicialItem linkedin">
              <a href="https://www.linkedin.com">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="sicialItem github">
              <a href="https://www.github.com">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
