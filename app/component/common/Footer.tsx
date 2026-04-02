import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  const socialIcons = [
    "/images/png/linkdin.png",
    "/images/png/instagram.png",
    "/images/png/facebook.png",
  ]

  const links = [
    {
      icon: "/images/png/message.png",
      label: "help@Dealzip.com",
      href: "mailto:help@Dealzip.com",
    },
    {
      icon: "/images/png/phone.png",
      label: "+1 234 456 678 89",
      href: "tel:+123445667889",
    },
  ]

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
        <div className='flex items-center justify-between gap-3'>
          <div className='max-w-[300px] w-full flex flex-col gap-5'>
            <Link href={'/'}>
              <Image
                src="/images/png/logo.png"
                alt="logo"
                width={250}
                height={51}
                className='sm:w-[250px] w-[170px] sm:h-[51px]'
              />
            </Link>
            {/* links */}
            <div className='flex flex-col gap-3'>
              {links.map((items, index) => (
                <a key={index} href={items.href} className='flex items-center gap-3 group'>
                  <Image src={items.icon}
                    className='w-[30px] h-[30px]'
                    width={30}
                    height={30}
                    alt='icons'

                  />
                  <span className='text-lg group-hover:text-green transition-colors'>{items.label}</span>
                </a>
              ))}
            </div>
            {/* social icons */}
            <div className='flex items-center gap-3'>
              {socialIcons.map((items, index) => (
                <Image src={items}
                  className=''
                  width={30}
                  key={index}
                  height={30}
                  alt='icons'
                />
              ))}
            </div>
          </div>
          <div className='w-full max-w-[840px]'>
            <div className='flex md:justify-end justify-start gap-20 flex-wrap'>
              {footerLinks.map((items, index) => (
                <div key={index} className='flex flex-col gap-3'>
                  <h4 className='font-semibold text-2xl text-green'>{items.name}</h4>
                  <div className='flex flex-col gap-2'>
                    {items.link.map((linkItem, linkIndex) => (
                      <Link key={linkIndex} href={'/'} className='text-gray-600 text-lg hover:text-green transition-colors'>
                        {linkItem}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer