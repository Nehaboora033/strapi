import React from 'react'

interface ButttonProps{
    children:React.ReactNode,
    className?:string,
}

const Button = ({children,className=""}:ButttonProps) => {
    return (
        <button>
            <div className={`bg-green hover:text-green hover:bg-white transition-all ease-in-out duration-200 cursor-pointer border-transparent hover:border-green border  text-base font-semibold rounded-full leading-160 text-white px-[32px] py-[12px] ${className}`}>
               {children}
            </div>
        </button>
    )
}

export default Button
