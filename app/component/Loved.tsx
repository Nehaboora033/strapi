"use client"
import React from 'react'
import Heading from './common/Heading'
import Text from './common/Text'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import "swiper/css"
import { getSiteUrl } from '../utils/commonFun'


interface lovedProps {
  title: string,
  description: string,
  sliderCard: {
    profileImage: {
      url: string,
    },
    description: string,
    name: string,
    role: string,
    companyRating: {
      companyLogo: {
        url: string,
      }
      ratingStatus: {
        url: string,
      }
    },
  }[],
}

const Loved = ({ lovedDetail }: { lovedDetail: lovedProps }) => {

  return (
    <div className='px-4 py-[100px]'>
      <div className='max-w-[1140px] mx-auto'>
        <div className='flex  justify-between mb-7'>
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
          {lovedDetail?.sliderCard.map((item, index) => (
            <SwiperSlide key={index} className='!h-auto'>
              <div className='bg-white border rounded-2xl p-5 shadow h-full flex flex-col'>

                {/* Description */}
                <p className='text-gray-600 mb-4'>
                  {item?.description}
                </p>

                {/* Profile */}
                <div className='flex items-center gap-3 mb-3'>
                  <Image
                    src={getSiteUrl(item?.profileImage?.url)}
                    alt={item.name}
                    width={40}
                    height={40}
                    className='rounded-full'
                  />
                  <div>
                    <h4 className='font-semibold'>{item?.name}</h4>
                    <p className='text-sm text-gray-500'>{item.role}</p>
                  </div>
                </div>

                {/* Rating */}
                  {item?.companyRating && (
                    <div className='flex items-center gap-2 mt-auto'>
                      {/* Access companyLogo directly instead of mapping */}
                      {item.companyRating.companyLogo?.url && (
                        <Image
                          src={getSiteUrl(item.companyRating.companyLogo.url)}
                          alt="company logo"
                          width={20}
                          height={20}
                        />
                      )}

                      {/* Access ratingStatus directly */}
                      {item.companyRating.ratingStatus?.url && (
                        <Image
                          src={getSiteUrl(item.companyRating.ratingStatus.url)}
                          alt="stars"
                          width={80}
                          height={20}
                        />
                      )}
                    </div>
                  )}
            </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
    </div >
  )
}

export default Loved