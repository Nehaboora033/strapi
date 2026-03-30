import React from 'react'
import Button from './common/Button'

const Hero = () => {
  return (
    <div className='px-4'>
      <div className='max-w-[1140px] mx-auto'>
        <div className='flex items-center justify-between '>
          <div className='max-w-[440px] w-full'>
            <div className='flex flex-col gap-4'>
              <div></div>
              <Button>
                WhatsApp Us Now
              </Button>
            </div>
          </div>
          <div>
            image
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero