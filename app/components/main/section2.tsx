import React from 'react'
import Image from 'next/image'

// const imageStyle = {
//   mask-image: 'url(w3logo.png)'
//   }

const SliderComponent = () => {

  return (
    <div className='w-full'>
      <Image
      src="/markytech-contents.svg"
      alt="can"
      className='mask z-20 absolute top-40 left-[355px] mix-blend-multiply'
      width={1184}
      height={511}
      />
      <Image src="/can.svg" alt="can" width={309} height={557}
      className='absolute top-40 left-[783px]' />
    </div>
  )
}

export default SliderComponent