import React from 'react'

const Title = ({ className, text}) => {
  return (
   <div className={`${className} font-Roboto lg:text-xl text-[16px] lg:font-bold font-semibold `}>{text}</div>
  )
}

export default Title ;