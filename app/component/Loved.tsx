"use client"
import React from 'react'
import Heading from './common/Heading'
import Text from './common/Text'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import "swiper/css"


interface lovedProps {
  title: string,
  description: string,
  sliderCard: {
    profileImage: string,
    description: string,
    name: string,
    role: string,
    companyRating: {
      companyLogo: string,
      ratingStatus: string,
    }[],
  }[]
}

const Loved = ({ lovedDetail }: { lovedDetail: lovedProps }) => {

  const data = [
    {
      description: "They handled our office lounge seating perfectly. Stylish, durable, and on time!",
      name: " John Doe",
      profileImage: "/images/png/rina-profile.png",
      role: "Marketing Manager",
      companyRating: [{
        companyLogo: "/images/png/google.png",
        ratingStatus: "/images/png/rating-star.png",
      }],
    },
    {
      description: "They handled our office lounge seating perfectly. Stylish, durable, and on time!",
      name: " John Doe",
      profileImage: "/images/png/david-profile.png",
      role: "Marketing Manager",
      companyRating: [{
        companyLogo: "/images/png/google.png",
        ratingStatus: "/images/png/rating-star.png",
      }],
    },
    {
      description: "They handled our office lounge seating perfectly. Stylish, durable, and on time!",
      name: " John Doe",
      profileImage: "/images/png/gaurav-profile.png",
      role: "Marketing Manager",
      companyRating: [{
        companyLogo: "/images/png/google.png",
        ratingStatus: "/images/png/rating-star.png",
      }],
    },
    {
      description: "They handled our office lounge seating perfectly. Stylish, durable, and on time!",
      name: " John Doe",
      profileImage: "/images/png/rina-profile.png",
      role: "Marketing Managear",
      companyRating: [{
        companyLogo: "/images/png/google.png",
        ratingStatus: "/images/png/rating-star.png",
      }],
    },
  ]
  return (
    <div className='px-4 py-[100px]'>
      <div className='max-w-[1140px] mx-auto'>
        <div className='flex  justify-between mb-4'>
          <Heading className='max-w-[553px] w-full'>
            {lovedDetail?.title}
          </Heading>
          <Text className='max-w-[425px] w-full'>
            {lovedDetail?.description}
          </Text>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='bg-white border rounded-2xl p-5 shadow'>

                {/* Description */}
                <p className='text-gray-600 mb-4'>
                  {item.description}
                </p>

                {/* Profile */}
                <div className='flex items-center gap-3 mb-3'>
                  <Image
                    src={item.profileImage}
                    alt={item.name}
                    width={40}
                    height={40}
                    className='rounded-full'
                  />
                  <div>
                    <h4 className='font-semibold'>{item.name}</h4>
                    <p className='text-sm text-gray-500'>{item.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className='flex items-center gap-2'>
                  {item.companyRating.map((rating, i) => (
                    <div key={i} className='flex items-center gap-2'>
                      <Image src={rating.companyLogo} alt="logo" width={20} height={20} />
                      <Image src={rating.ratingStatus} alt="stars" width={80} height={20} />
                    </div>
                  ))}
                  <Image src={item.companyRating[0].ratingStatus} alt="stars" width={80} height={20} />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Loved