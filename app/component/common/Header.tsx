"use client"

import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { getSiteUrl } from '@/app/utils/commonFun'

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

    const logoUrl =
        getSiteUrl(navDetail?.header?.logo?.url || "") ||
        "/images/png/logo.png"

    return (
        <div className='p-5'>
            <div className='max-w-[1140px] mx-auto'>
                <div className='flex justify-between'>

                    <Link href="/">
                        <Image
                            src={logoUrl}
                            alt="logo"
                            width={193}
                            height={41}
                            className='w-[193px] h-[41px]'
                        />
                    </Link>

                    <div className='flex items-center gap-[32px]'>
                        {navDetail?.header?.links?.map((item, index) => (
                            <Link key={index} href={item.url}>
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <Button>
                        {navDetail?.header?.navCta?.label}
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default Header