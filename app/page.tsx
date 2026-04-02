import React from 'react'
import Hero from './component/Hero'
import Loved from './component/Loved'
import Trusted from './component/Trusted'
import Faq from './component/Faq'
import { faqDataGet, lovedDataGet } from './utils/api/apiList'
import Blog from './component/Blog'
// import SvgMoved from './component/SvgMoved'

const page = async () => {
  // faq api call
  const faqData = await faqDataGet()
  if (!faqData?.data?.Faq) return null
  const faqDetail = faqData.data.Faq
  // console.log(faqDetail, "faq dara");

  // loved api call
  const lovedData = await lovedDataGet()
  console.log(lovedData, "loved")
  if (!lovedData?.data?.loved) return null
  const lovedDetail = lovedData.data.loved
  console.log(lovedDetail, "loved data");

  return (
    <div>
      <Hero />
      <Trusted />
      <Loved lovedDetail={lovedDetail} />
      <Blog/>
      <Faq faqDetail={faqDetail} />
      {/* <SvgMoved /> */}
    </div>
  )
}

export default page
