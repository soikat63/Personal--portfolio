import React from "react";
import Container from "./Layer/Container";
import Image from "./Layer/Image"
import List from "./Layer/List";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="lg:mt-6 lg:mb-6 mt-3 mb-3  ">
      <Container className="flex items-center justify-between ">
        <Image className=" logo h-8  " to="/" src={logo} alt="logo" />

        <div className="menu flex items-center  gap-x-[200px]    ">
          <ul className="lg:flex items-center gap-x-10  hidden ">
            <List to="" text="Home" />
            <List to="Portfolio" text="Portfolio" />
            <List to="about" text="About Me" />
          </ul>
          <div className="icon flex items-center lg:gap-x-16 gap-x-3">
            <div className="icon flex items-center lg:gap-x-4 gap-2.5 lg:text-2xl text-xl text-white">
              <Link
                to="https://www.linkedin.com/in/soikat-islam-nirob-83b650328"
                target="blank"
              >
                {" "}
                <FaLinkedin />{" "}
              </Link>
              <Link to="https://github.com/soikat63" target="blank">
                {" "}
                <FaGithub />{" "}
              </Link>
              <Link
                to="https://www.facebook.com/soikat.islam.5243"
                target="blank"
              >
                {" "}
                <FaFacebookSquare />{" "}
              </Link>
            </div>
            <div className="button lg:mr-10  border lg:rounded-lg rounded-[5px] border-[#5E3BEE] hover:border-green-400 hover:w-full hover:bg-[#c463b6af] hover:transition-all hover:duration-300">
              <Link to="Contact">
                <button className="lg:px-[30px] px-3 lg:py-[12px] py-1.5 leading-0 flex items-center  font-Roboto lg:font-semibold text-white lg:text-base text-[12px] ">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
