import React from 'react'
import Container from './Layer/Container'
import Image from './Layer/Image' 
import html from '../assets/html.png'
import css from '../assets/css.png'
import bootstrap from '../assets/bootstrap.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import Tailwind from '../assets/Tailwind.png'
import visualcodeimg from '../assets/visualcodeimg.png'
import github from '../assets/github.png'

const Technology = () => {
  return (
    <div className='lg:mt-20 mt-9'>
        <Container>
            <div className="title flex items-center justify-center">
                <h1 className='text-[#E5E5E5] font-Roboto font-bold lg:text-4xl text-[20px]'>Technology</h1>
            </div>
            <div className="image flex items-center  gap-10 wfull justify-center lg:mt-14 mt-9 flex-wrap">
                        <div className="html w-[100px] h-[100px]  p-4   border-[5px] border-[#696769] rounded-xl">
                            <Image className= 'w-full h-full object-cover cursor-auto' src={html} alt=''/>
                        </div>
                        <div className="html w-[100px] h-[100px]  p-4   border-[5px] border-[#696769] rounded-xl">
                            <Image className= 'w-full h-full object-cover cursor-auto' src={css} alt=''/>
                        </div>
                        <div className="html w-[100px] h-[100px]  p-4   border-[5px] border-[#696769] rounded-xl">
                            <Image className= 'w-full h-full object-cover cursor-auto' src={bootstrap} alt=''/>
                        </div>
                        <div className="html w-[100px] h-[100px]  p-4   border-[5px] border-[#696769] rounded-xl">
                            <Image className= 'w-full h-full object-cover cursor-auto' src={javascript} alt=''/>
                        </div>
                        <div className="html w-[100px] h-[100px]  p-4   border-[5px] border-[#696769] rounded-xl">
                            <Image className= 'w-full h-full object-cover cursor-auto' src={react} alt=''/>
                        </div>
                        <div className="html w-[100px] h-[100px]  p-4   border-[5px] border-[#696769] rounded-xl">
                            <Image className= 'w-full h-full object-cover cursor-auto' src={Tailwind} alt=''/>
                        </div>
                        <div className="html w-[100px] h-[100px]  p-4   border-[5px] border-[#696769] rounded-xl">
                            <Image className= 'w-full h-full object-cover cursor-auto' src={visualcodeimg} alt=''/>
                        </div>
                        <div className="html w-[100px] h-[100px]  p-4   border-[5px] border-[#696769] rounded-xl">
                            <Image className= 'w-full h-full object-cover cursor-auto' src={github} alt=''/>
                        </div>
            </div>

        </Container>
    </div>
  )
}

export default Technology