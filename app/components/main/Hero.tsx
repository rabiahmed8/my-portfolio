import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='rotate flex flex-col w-full'>
        <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover '
        >
            <source src='/blackhole.webm' type='video/webm' />
        </video>
        <HeroContent />
    </div>
  )
}

export default Hero