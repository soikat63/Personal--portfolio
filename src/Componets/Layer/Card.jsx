import React from 'react'
import Container from './Container'
import Image from './Image'
import Title from './Title'
import Button from './Button'

const Card = ({to, src, alt, title, description }) => {
  return (
    <div>
        <Container >
          <div className="card lg:w-[400px] w-auto h-[450px]   bg-white rounded-lg border border-sky-400 overflow-hidden ">
            <Image className='w-full lg:h-[248px] h-[150px] object-fill cursor-auto rounded-md' to={to} src={src} alt={alt}/>

            <div className="text lg:px-6 px-3 lg:py-8 py-4">
              <Title text={title}/>
              <p className='lg:my-4 my-2  font-Roboto  text-[14px] '>{description}</p>
              <Button   to={to}  text='Live Preview ' className="gap-x-3 " />
            </div>
          </div>
        </Container>

       


    </div>
  )
}

export default Card