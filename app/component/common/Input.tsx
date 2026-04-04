import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<InputProps> = ({ error, className = '', ...props }) => {
  return (
    <div className={`w-full flex flex-col gap-1`}>
      <input 
        className={`w-full bg-[#FAFAFA] border ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-100 focus:border-green/50'} rounded-xl px-4 py-3 outline-none focus:bg-white transition-colors text-[14px] ${className}`}
        {...props} 
      />
      {error && <span className="text-red-500 text-[12px] px-1">{error}</span>}
    </div>
  )
}

export default Input