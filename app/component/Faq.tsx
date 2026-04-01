"use client"
import React, { useState } from 'react'
import Heading from './common/Heading'
import Button from './common/Button'

interface FaqProps {
  title: string,
  accordianCard: {
    question: string,
    answer: string,
  }[]
  ctaFaq: {
    links: {
      label: string,
      url: string,
    }
  }
}

const Faq = ({ faqDetail }: { faqDetail: FaqProps }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null) // close
    } else {
      setOpenIndex(index) // open
    }
  }

  return (
    <div className='px-4 py-[80px]'>
      <div className='max-w-[1140px] mx-auto'>
        <Heading className=' text-center'>
          {faqDetail?.title}
        </Heading>
        <div className=" max-w-[900px] mx-auto mt-10">
          {faqDetail?.accordianCard?.map((item, index) => (
            <div key={index} className="border bg-green/10 mb-3 p-4 rounded-2xl">

             
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h3 className='font-semibold md:text-[20px] text-base'>{item.question}</h3>
                <span>{openIndex === index ? "-" : "+"}</span>
              </div>
             
              {openIndex === index && (
                <p className="mt-2 text-gray-600 sm:text-base text-sm">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        
          <Button className='flex justify-center mx-auto mt-4'>
            {faqDetail.ctaFaq.links.label}
          </Button>
        
      </div>
    </div>
  )
}

export default Faq