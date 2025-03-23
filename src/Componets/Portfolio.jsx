import React from "react";
import Card from "./Layer/Card";
import Container from "./Layer/Container";
import orebi from "../assets/orebi.png";
import resturant from "../assets/resturant.png"
import hekto from "../assets/hekto.png"

const Portfolio = () => {
  return (
    <div>
      <div className="title lg:my-[100px] my-[50px]">
        <h1 className="font-Roboto font-semibold lg:text-4xl text-[20px] w-full flex items-center justify-center text-[#E5E5E5]">
          Portfolio
        </h1>
      </div>
      <Container>
        <div className=" lg:flex-row md:flex-row sm:flex-col flex-wrap flex  gap-6 items-center justify-center">
          <Card
            to="https://oreebi-ecommerce-react-project.vercel.app/"
            src={orebi}
            alt=""
            title="Oreebi Ecommerce-Project"
            description="Oreebi – A fast, reliable, and modern E-commerce platform built with React.  "
          />
          <Card
            to="https://gericht-restaurant-2024.vercel.app/"
             src={resturant}
            alt=""
            title="Website for a restaurant"
            description="Gericht is a website for a restaurant which is developed with react.js. "
          />
          <Card
            to="https://hekto-nine.vercel.app/"
            src={hekto}
            alt=""
            title="Hekto Ecommerce-Project"
            description="This is a modern E-commerce platform built with React. "
          />
          
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
