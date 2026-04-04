import React from 'react'
import ContactForm from '../component/common/ContactForm'
import { contactDataGet } from '../utils/api/apiList'

const page = async () => {
  // contact api call
    const contactData = await contactDataGet()
    // console.log(contactData.data, "contact")
    if (!contactData?.data?.operations) return null
    const contactDetail = contactData.data.operations
    // console.log(contactDetail, "detail contact")

  return (
    <div>
      <ContactForm contactDetail={contactDetail} />
    </div>
  )
}

export default page