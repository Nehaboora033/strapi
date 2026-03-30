import React from 'react'

type HeadingProps = {
    children: React.ReactNode;
}

const Heading = ({children, className}: HeadingProps & { className?: string }) => {
  return (
    <div className={`${className || ''} font-semibold lg:text-custom-lg md:text-[32px] text-[28px] leading-120 text-black`}>
      {children}
      </div>
  )
}

export default Heading