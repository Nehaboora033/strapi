import React from 'react'
import Hero from './component/Hero'
import Loved from './component/Loved'
import Faq from './component/Faq'
import Trusted from './component/Trusted'

const page = () => {
  return (
    <div>
     <Hero/>
     <Trusted/>
     <Loved/>
     <Faq/>
    </div>
  )
}

export default page
