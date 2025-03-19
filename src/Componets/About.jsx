import React from 'react'
import Container from './Layer/Container';
import Image from './Layer/Image';
import { FaCloudDownloadAlt } from "react-icons/fa";
import image from '../assets/image.jpg'

const AboutMe = () => {
  return (
    <div className='lg:mt-[60px] mt-8'>
        <Container className='lg:px-[90px]  '>
            <div className="title font-Roboto font-semibold lg:text-6xl text-2xl tracking-[3px] text-[#E5E5E5] w-full  flex items-center justify-center mb-16 ">About Me</div>

           <div className='lg:flex flex-col lg:flex-row items-start gap-x-[70px] '>
           <div className="Image lg:w-[350px] lg:h-[400px] mb-9 lg:mb-0  ">
                <Image className=' w-full h-full object-contain cursor-auto rounded-lg   ' to='/' src={image} alt=''   />

            </div>
            <div className="text lg:w-1/2 flex flex-col ">
                <div className="title  font-Roboto  text-[#E5E5E5] font-semibold lg:text-4xl text-[20px] lg:mb-7 mb-3">
                    <h2 >I am Professional User Experienced Designer.</h2>
                </div>
                <p className=' font-Roboto text-[#E5E5E5] text-xs lg:text-base'>
                    I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. With 1 years of experience, I have honed my skill in front-end technology like React. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.
                </p>
                <div className="downloade py-4 mt-5 border border-[#A53DFF]  rounded-lg  bg-transparent lg:w-1/2 flex flex-col items-center justify-center hover:bg-[#A53DFF] hover:transition-all hover:duration-300  ">
                    <FaCloudDownloadAlt className='text-[#E5E5E5]  lg:flex items-center justify-center w-full hidden'  />
                    <button className='text-[#E5E5E5] font-Roboto '>Download My Resume</button>
                </div>
                
            </div>
           </div>

        </Container>
    </div>
  )
}

export default AboutMe