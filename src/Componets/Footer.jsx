import React from 'react'
import Container from './Layer/Container'

const Footer = () => {
  return (
    <div className='lg:mt-[100px]  mt-[60px] mb-8 border-t  border-[#7b7a7a]'>
        <Container className="lg:my-[60px] my-[30px] flex items-center justify-center flex-col lg:gap-y-8 gap-y-3">
            <h1 className='font-Roboto lg:font-bold font-semibold lg:text-[48px] text-[38px] text-[#E5E5E5]'>Get in touch</h1>
            <p className='font-Roboto lg:text-[24px] text-xl text-[#E5E5E5]'>Dhaka, Bangladesh</p>
            <p className='font-Roboto lg:text-[24px] text-xl text-[#E5E5E5]' ><a href="tel:+8801863897247">+8801863897247</a></p>
            <p className='font-Roboto lg:text-[24px] text-xl text-[#E5E5E5]' ><a href="mailto:soikat6389@gmail.com">soikat6389@gmail.com</a></p>
        </Container>
         <p className='font-Roboto lg:text-[12px] text-sm text-[#e8b2f2] flex justify-end px-[100px]'>Copy Right 2024 By Soikat Islam Nirob....</p>
       
    </div>
  )
}

export default Footer