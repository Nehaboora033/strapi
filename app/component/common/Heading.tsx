import React from 'react'

type HeadingProps = {
  children?: React.ReactNode
  className?: string
  dangerouslySetInnerHTML?: {
    __html: string
  }
}

const Heading = ({ children, className, dangerouslySetInnerHTML }: HeadingProps) => {

  if (dangerouslySetInnerHTML) {
    return (
      <div
        className={`font-semibold lg:text-custom-lg md:text-[32px] text-[28px] leading-120 text-black ${className}`}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    )
  }

  return (
    <div
      className={`font-semibold lg:text-custom-lg md:text-[32px] text-[28px] leading-120 text-black ${className}`}
    >
      {children}
    </div>
  )
}

export default Heading