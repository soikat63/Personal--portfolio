import React from "react";
import Container from "./Layer/Container";
import { IoLocationOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
const Contact = () => {
  return (
    <div className="lg:mt-20 mt-10 ">
      <Container className="flex lg:items-end gap-x-[100px] flex-col lg:flex-row">
        <div className="left lg:w-[595px] w-full ">
          <h1 className="font-Roboto font-bold lg:text-[38px] text-[18px] text-[#E5E5E5]">
            Let’s discuss your Project
          </h1>
          <p className="font-Roboto lg:text-base text-sm text-[#E5E5E5] mt-4 lg:mb-9 mb-5 ">
            AI learned empathy, bridging worlds, uniting hearts through
            understanding.
          </p>
          <div className=" flex flex-col gap-y-3">
            <div className="adress lg:w-[395px] lg:h-[96px] lg:p-6 p-3 bg-transparent border border-[#A53DFF] hover:border-transparent rounded-lg hover:bg-white transition-all duration-500 text-[#E5E5E5] hover:text-black flex  items-center gap-x-5 ">
              <div className="icon lg:w-12 w-7  lg:h-12 h-7 flex items-center justify-center bg-[#A53DFF] text-[#FFFFFF] rounded text-xl">
                <IoLocationOutline />{" "}
              </div>
              <div className="text font-Roboto  lg:text-base text-sm ">
                <p>Address:</p>
                <h6 className="lg:font-semibold ">Dhaka, Bangladesh</h6>
              </div>
            </div>
            <div className="adress lg:w-[395px] lg:h-[96px] lg:p-6 p-3 bg-transparent border border-[#A53DFF] hover:border-transparent rounded-lg hover:bg-white transition-all duration-500 text-[#E5E5E5] hover:text-black flex  items-center gap-x-5 ">
              <div className="icon lg:w-12 w-7  lg:h-12 h-7 flex items-center justify-center bg-[#A53DFF] text-[#FFFFFF] rounded text-xl">
                <SiGmail />{" "}
              </div>
              <div className="text font-Roboto lg:text-base text-sm  ">
                <p>My Gmail:</p>
                <a href="mailto: soikat6389@gmail.com" target="_blank">
                  <h6 className="lg:font-semibold  ">soikat6389@gmail.com</h6>
                </a>
              </div>
            </div>
            <div className="adress lg:w-[395px] lg:h-[96px] lg:p-6 p-3 bg-transparent border border-[#A53DFF] hover:border-transparent rounded-lg hover:bg-white transition-all duration-500 text-[#E5E5E5] hover:text-black flex  items-center gap-x-5 ">
              <div className="icon lg:w-12 w-7 lg:h-12 h-7 flex items-center justify-center bg-[#A53DFF] text-[#FFFFFF] rounded text-xl">
                <FaWhatsapp />{" "}
              </div>
              <div className="text font-Roboto lg:text-base text-sm  ">
                <p>Whatsapp</p>
                <Link to="tel:+8801863897247" target="_blank">
                  <h6 className="lg:font-semibold">+8801863897247</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* ======================================================================== */}
        <div className="form">
          <from className="flex flex-col gap-y-3 mb-8 lg:w-[500px] w-full lg:mt-0 mt-7 ">
            <div className="name">
              <input
                type="text"
                placeholder="Name*"
                className="bg-transparent  border-b w-full p-2 text-white  outline-none lg:text-base text-sm "
              />
            </div>
            <div className="Email">
              <input
                type="mail"
                placeholder="Email*"
                className="bg-transparent  border-b w-full p-2 text-white  outline-none lg:text-base text-sm "
              />
            </div>
            <div className="Location">
              <input
                type="text"
                placeholder="Location*"
                className="bg-transparent  border-b w-full p-2 text-white  outline-none lg:text-base text-sm"
              />
            </div>
            <div className="subject">
              <input
                type="text"
                placeholder="Subject*"
                className="bg-transparent  border-b w-full p-2 text-white  outline-none lg:text-base text-sm"
              />
            </div>
            <div className="name">
              <textarea
                type="text"
                placeholder="Message*"
                className="bg-transparent  border-b w-full p-2 text-white  outline-none lg:text-base text-sm overflow-hidden resize-none"
              />
            </div>
          </from>
          <button className="w-[141px] h-12 bg-[#A53DFF] rounded-lg text-white font-Roboto font-semibold flex items-center justify-center gap-3">
            Submit{" "}
            <CiLocationArrow1 className="lg:font-bold font-semibold lg:text-xl text-base" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
