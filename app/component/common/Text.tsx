import React from 'react'
interface textProps {
    children: React.ReactNode,
    className?: string,
}

const Text = ({children,className}:textProps) => {
    return (
        <p className={`${className || ''} text-grey  font-regular text-base leading-160`}>
            {children}
        </p>
    )
}

export default Text