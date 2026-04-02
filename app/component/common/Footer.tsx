import { getSiteUrl } from '@/app/utils/commonFun'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface footerProps {
  logo: {
    url: string,
  },
  description: string,
  copyright: string,
  content: {
    detail: string,
    icon: {
      url: string,
    }
    url: string,
  }[],
  socialLinks: {
    icon: {
      url: string,
    }
    url: string,
  }[],
  sectionLinks: {
    title: string,
    links: {
      label: string,
      url: string,
    }[],
  }[],
}

const Footer = ({ footerDetail }: { footerDetail: footerProps }) => {
  const footerLinks = [
    {
      name: "Links",
      link: [
        "Home",
        "About Us",
        "Services",
        "Showcase",
      ]
    },
    {
      name: "Legal",
      link: [
        "Terms of Service",
        "Privacy Policy",
        "Cookie Policy",
      ]
    },
    {
      name: "Product",
      link: [
        "Pricing",
        "Features",
        "Integrations",
      ]
    },
  ]
  return (
    <div className='px-4 py-[80px] '>
      <div className='max-w-[1140px] mx-auto '>
        <div className='flex  justify-between gap-3'>
          <div className='max-w-[400px] w-full flex flex-col gap-5'>
            <Link href={'/'}>
              <Image
                src={getSiteUrl(footerDetail.logo.url)}
                alt="logo"
                width={250}
                height={51}
                className='sm:w-[250px] w-[170px] sm:h-[51px]'
              />
            </Link>

            <p className='text-base'>
              {footerDetail.description}
            </p>
            {/* links */}
            <div className='flex flex-col gap-3'>
              {footerDetail?.content.map((items, index) => (
                <a key={index} href={items.url} className='flex items-center gap-3 group'>
                  <Image
                    // src={items.icon}
                    src={getSiteUrl(items.icon.url)}
                    className='w-[30px] h-[30px]'
                    width={30}
                    height={30}
                    alt='icons'

                  />
                  <span className='text-lg group-hover:text-green transition-colors'>{items.detail}</span>
                </a>
              ))}
            </div>

            {/* social icons */}
            <div className='flex items-center gap-3'>
              {footerDetail.socialLinks.map((items, index) => (
                <Link key={index} href={items.url}>
                  <Image src={getSiteUrl(items.icon.url)}
                    className=''
                    width={30}
                    height={30}
                    alt='icons'
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className='w-full max-w-[840px]'>
            <div className='flex md:justify-end justify-start gap-20 flex-wrap'>
              {footerDetail.sectionLinks.map((items, index) => (
                <div key={index} className='flex flex-col gap-3'>
                  <h4 className='font-semibold text-2xl text-green'>{items.title}</h4>
                  <div className='flex flex-col gap-2'>
                    {items.links.map((linkItem, linkIndex) => (
                      <Link key={linkIndex} href={linkItem.url} className='text-gray-600 text-lg hover:text-green transition-colors'>
                        {linkItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* copy right */}
        <div className='mx-auto mt-10  '>
          <p className='text-base text-medium text-center'>
            {footerDetail.copyright}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer