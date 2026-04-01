"use client"
import React, { useState } from 'react'

interface AccordionItem {
  question: string;
  answer: string;
}

const FaqAccordion = ({ items }: { items: AccordionItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!items || items.length === 0) return null;

  return (
    <div className="mt-10 flex flex-col gap-4 max-w-[800px] mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
          <button
            className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium text-lg text-gray-800">{item.question}</span>
            <span className="text-gray-500 text-2xl font-light leading-none ml-4">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>

          {/* Smooth height transition using grid */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="p-5 pt-0 text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FaqAccordion
