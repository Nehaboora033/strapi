import React from 'react'
import Hero from './component/Hero'
import Loved from './component/Loved'
// import Faq from './component/Faq'
import Trusted from './component/Trusted'
import Faq from './component/Faq'
import { faqDataGet } from './utils/api/apiList'
// import Faq from './component/Faq'

const page = async () => {
  const faqData = await faqDataGet()
  console.log(faqData, "check faq")
  if (!faqData?.data?.Faq) return null
  const faqDetail = faqData.data.Faq
  console.log(faqDetail, "faq dara");
  return (
    <div>
      <Hero />
      <Trusted />
      <Loved />
      <Faq faqDetail={faqDetail} />
    </div>
  )
}

export default page
