import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Button = ({className, text, to, src, alt }) => {
  return (
    
      <Link className={className} to={to} src={src} alt={alt} target='blank'> 
          <div className={`${className}   font-Roboto lg:text-[16px] text-sm font-semibold  border lg:w-auto lg:px-4   lg:py-3 py-2 flex items-center justify-center gap-x-5   text-[#A53DFF] border-[#A53DFF] rounded `}> {text} {<FaArrowRight />} </div>
      </Link>
  )
}

export default Button