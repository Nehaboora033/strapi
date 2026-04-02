import React from 'react'
import Button from './common/Button'
import Image from 'next/image'
import Heading from './common/Heading'
import Text from './common/Text'
import { heroDataGet } from '../utils/api/apiList'
import { getSiteUrl } from '../utils/commonFun'

type HeroProps = {
  title: string
  description: string
  cta: {
    label: string
    url: string
  }
  image: {
    url: string,
  }
  review: {
    title: string
    ratingImage: {
      url: string,
    }
    companyLogo: {
      url: string,
    }
  }
}

type HeroApiResponse = {
  data: {
    hero: HeroProps
  }
}

const Hero = async () => {
  const heroData: HeroApiResponse = await heroDataGet()

  if (!heroData?.data?.hero) return null
  const heroDetail = heroData.data.hero

  return (
    <div className='px-4 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('/images/png/Hero section-bg.png')` }}>
      <div className='max-w-[1140px] mx-auto  ' >
        <div className='flex items-center justify-between py-10 gap-5 lg:flex-row flex-col'>
          {/* left  */}
          <div className='max-w-[440px] w-full'>
            <div className='flex flex-col gap-4'>
              {/* google rating */}
              <div className='flex flex-col gap-2 '>
                <p className='text-black font-normal text-base leading-120'>
                  {heroDetail?.review?.title}
                </p>
                <div className='flex items-center gap-3'>
                  <Image
                    src={getSiteUrl(heroDetail.review?.companyLogo?.url)}
                    alt="google logo"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={getSiteUrl(heroDetail.review?.ratingImage?.url)}
                    alt="google rating"
                    width={120}
                    height={24}
                  />
                </div>
              </div>
              {/* heading */}
              <Heading
                className="max-w-[431px]"
                dangerouslySetInnerHTML={{ __html: heroDetail.title }}
              />
              <Text className="mb-[10px]">
                {heroDetail.description}
              </Text>
              <Button className='min-w-[240px] w-fit'>
                {heroDetail.cta?.label}
              </Button>
            </div>
          </div>
          {/* right */}
          <div>
            <Image
              src={getSiteUrl(heroDetail.image?.url)}
              alt="hero image"
              width={425}
              height={600}
              className='sm:w-[425px] sm:h-[600px]  w-[350px] object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero