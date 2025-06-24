import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex justify-center mt-5'>
        <div className='relative h-40 w-40'>
            <Image
                src="/logo.svg"
                alt="logo"
                fill
            />
        </div>
    </div>
  )
}

export default Logo