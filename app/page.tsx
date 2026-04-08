import React from 'react'
import Hero from './component/Hero'
import Loved from './component/Loved'
import Trusted from './component/Trusted'
import Faq from './component/Faq'
import { contactDataGet, faqDataGet, lovedDataGet } from './utils/api/apiList'
import Blog from './component/Blog'
import ContactForm from './component/common/ContactForm'
import Product from './component/Product'
import StudentDetails from './component/StudentDetails'

const page = async () => {
  // faq api call
  const faqData = await faqDataGet()
  if (!faqData?.data?.Faq) return null
  const faqDetail = faqData.data.Faq
  // console.log(faqDetail, "faq dara");

  // loved api call
  const lovedData = await lovedDataGet()
  // console.log(lovedData, "loved")
  if (!lovedData?.data?.loved) return null
  const lovedDetail = lovedData.data.loved
  // console.log(lovedDetail, "loved data");

  // contact api call
  const contactData = await contactDataGet()
  // console.log(contactData.data, "contact")
  if (!contactData?.data?.operations) return null
  const contactDetail = contactData.data.operations
  console.log(contactDetail, "detail contact")

  return (
    <div>
      <Hero />
      <Trusted />
      <Loved lovedDetail={lovedDetail} />
      <Blog />
      <Faq faqDetail={faqDetail} />
      <ContactForm contactDetail={contactDetail} />
      <Product/>
      <StudentDetails/>
    </div>
  )
}

export default page
