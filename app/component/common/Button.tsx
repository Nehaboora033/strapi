import React from 'react'

interface ButttonProps{
    children:React.ReactNode,
    className?:string,
}

const Button = ({children,className=""}:ButttonProps) => {
    return (
        <button className={`bg-green hover:text-green hover:bg-transparent  transition-all ease-in-out duration-200 cursor-pointer border-transparent hover:border-green border  text-base font-semibold rounded-full leading-160 text-white sm:px-[32px] px-3 sm:py-[12px] py-2 ${className}`} >
               {children}
        </button>
    )
}

export default Button
