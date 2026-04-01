import React from 'react'
import Heading from './common/Heading'

interface FaqProps {
  title: string,
  accordianCard: {
    question: string,
    answer: string,
  },
  ctaFaq: {
    links: {
      label: string,
      url: string,
    }
  }
}

const Faq = async ({ faqDetail }: { faqDetail: FaqProps }) => {
  return (
    <div className='px-4 py-[80px]'>
      <div className='max-w-[1140px] mx-auto'>
        <Heading className=' text-center'>
          {faqDetail?.title}
        </Heading>
        {/* Render the accordion if the data exists — checking both potential locations since it's dynamic */}
        {/* {(faqDetail?.Faq?.accordianCard || faqDetail?.accordianCard) && (
          <FaqAccordion items={faqDetail?.Faq?.accordianCard || faqDetail?.accordianCard} />
        )} */}

        
      </div>
    </div>
  )
}

export default Faq