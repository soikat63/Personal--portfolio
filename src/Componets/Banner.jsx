import React from "react";
import Container from "./Layer/Container";
import Image from "./Layer/Image";
import nirob from "../assets/nirob.jpg";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      <Container className="lg:py-20 py-3 lg:flex  items-center justify-between   ">
        <div className="text lg:max-w-[750px]">
          <h1 className="font-Roboto lg:font-bold font-semibold lg:text-[38px] text-xl max-w-full leading-0  text-[#E5E5E5] lg:mb-5">
            Hello I'm{" "}
          </h1>
          <h1 className="font-Roboto lg:font-bold font-semibold lg:text-[38px] text-xl max-w-full leading-0  text-[#E5E5E5]   lg:tracking-[5px] tracking-normal">
            SOIKAT ISLAM NIROB
          </h1>

          <h3 className="font-Roboto lg:text-[26px] text-base text-white leading-0 lg:tracking-[3px] tracking-normal lg:my-6 my-3">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-400 to-blue-700">
    <Typewriter
      words={[
        "Front-End Developer",
        "Web Developer",
        "React.js Developer",
        "Web Designer",
      ]}
      loop= {true}
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <Cursor/>
</h3>

          <div className="text ">
            <p className="text-[#E5E5E5] lg:text-xl text-sm  w-full font-Roboto lg:font-light  lg:leading-normal ">
              I'm a Passionate and detail-oriented front-end developer with a
              year of experience in crafting dynamic and user-centric web
              applications using React. Adept at transforming complex design
              concepts into seamless and responsive interfaces. Eager to
              leverage my skills in HTML, CSS, and JavaScript to contribute to
              innovative projects that enhance user experiences and drive
              business growth. Committed to continuous learning and professional
              development to stay at the forefront of emerging web technologies
              and best practices.
            </p>
          </div>

          <div className=" lg:flex justify-between mt-[80px] hidden ">
            <div className="First font-Roboto text-[#181818] w-[200px] max-h-[72px] py-4 rounded-md flex flex-col items-center justify-center  bg-[#EDD8FF]">
              <h6 className="lg:text-2xl text-base lg:font-bold font-semibold">
                01 Y.
              </h6>
              <p className=" lg:text-base text-sm">Experience</p>
            </div>
            <div className="First font-Roboto text-[#181818] w-[200px] max-h-[72px] py-4 rounded-md flex flex-col items-center justify-center  bg-[#EDD8FF]">
              <h6 className="lg:text-2xl text-base lg:font-bold font-semibold">
                10 +
              </h6>
              <p className="lg:text-base text-sm">Project Completed</p>
            </div>
            <div className="First font-Roboto text-[#181818] w-[200px] max-h-[72px] py-4 rounded-md lg:flex flex-col items-center justify-center  bg-[#EDD8FF] ">
              <h6 className="lg:text-2xl text-base lg:font-bold font-bold ">
                10
              </h6>
              <p className="lg:text-base text-sm">Happy Client</p>
            </div>
          </div>
        </div>
        <div className="image lg:w-[500px] lg:h-[600px] h-[350px]  lg:mt-0 mt-12 ">
          <Image
            className="w-full h-full  object-cover lg:rounded-[24px] rounded-2xl cursor-auto "
            to="/"
            src={nirob}
            alt="banner-image"
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
