"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import { getSiteUrl } from '@/app/utils/commonFun'
import Hamburger from 'hamburger-react'
import { usePathname } from 'next/navigation'

type NavData = {
    header: {
        logo: {
            url: string
        }
        links: {
            label: string
            url: string
        }[]
        navCta: {
            label: string
        }
    }
}
const Header = ({ navDetail }: { navDetail: NavData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const logoUrl =
        getSiteUrl(navDetail?.header?.logo?.url || "") ||
        "/images/png/logo.png"

    return (
        <div className={`sm:p-5 px-3 py-5 fixed top-0 z-20 w-full bg-white`}>
            <div className='max-w-[1140px] mx-auto'>
                <div className='flex justify-between items-center'>

                    <Link href="/">
                        <Image
                            src={logoUrl}
                            alt="logo"
                            width={193}
                            height={41}
                            className='sm:w-[193px] w-[170px] sm:h-[41px] '
                        />
                    </Link>

                    <div className={`flex items-center gap-[32px]  ${isOpen ? 'right-0' : 'max-lg:right-[-100%]'} max-lg:flex-col max-lg:items-center z-[10] max-lg:justify-center transition-[right] max-lg:fixed max-lg:top-0 duration-800 ease-in-out max-sm:w-full max-lg:w-[100%] max-lg:h-full max-lg:bg-white `}>
                        {navDetail?.header?.links?.map((item, index) => {
                            const isActive = pathname === item.url;
                            return (
                                <Link 
                                    key={index} 
                                    href={item.url} 
                                    className={`text-nowrap transition-colors ${isActive ? 'text-green font-semibold' : 'hover:text-green'}`}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </div>

                    <div className='flex items-center'>
                        <Button className='text-nowrap '>
                            {navDetail?.header?.navCta?.label}
                        </Button>
                        <button
                            aria-label="Toggle navigation menu"
                            className='z-[11] lg:hidden'
                            onClick={() => setIsOpen(!isOpen)}>
                            <Hamburger
                                toggled={isOpen}
                                toggle={setIsOpen}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header