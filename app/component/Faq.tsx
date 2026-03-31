import React from 'react'
import Heading from './common/Heading'
import { faqDataGet } from '../utils/api/apiList'

const Faq = async () => {
  const faqData = await faqDataGet()
  console.log(faqData, "check faq")
  if (!faqData?.data?.Faq) return null

  const faqDetail = faqData.data
  console.log(faqDetail, "hello");

  return (
    <div className='px-4 py-[80px]'>
      <div className='max-w-[1140px] mx-auto'>
        <Heading className=' text-center'>
          {faqDetail.Faq.title}
        </Heading>
       
      </div>
    </div>
  )
}

export default Faq