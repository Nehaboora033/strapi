import React from 'react'
import Heading from './common/Heading'
import Image from 'next/image'
import { trustedDataGet } from '../utils/api/apiList'
import { getSiteUrl } from '../utils/commonFun'

interface TrustedImage {
    id: number
    url: string
    name?: string
}

interface TrustedDetail {
    trusted: {
        heading: string
        image: TrustedImage[]
    }
}

const Trusted = async () => {

    const trustedData = await trustedDataGet()

    if (!trustedData?.data?.trusted) return null
    const trustedDetail: TrustedDetail = trustedData.data
    // console.log(trustedDetail, "hello");

    return (
        <div className='px-4 py-[100px]'>
            <style>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .marquee-container {
                    animation: marquee 30s linear infinite;
                }
                .marquee-container:hover {
                    animation-play-state: paused;
                }
            `}</style>
            <div className='max-w-[1140px] mx-auto'>
                <Heading className=' text-center'>
                    {trustedDetail.trusted?.heading}
                </Heading>

                <div className='mt-9 overflow-hidden flex'>
                    <div className='marquee-container flex md:gap-12 gap-2 items-center'>
                        {trustedDetail?.trusted?.image?.length > 0 && trustedDetail?.trusted?.image?.map((image: TrustedImage, index: number) => (
                            <div
                                key={index}
                                className='shrink-0 w-45 h-15 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity'
                            >
                                <Image
                                    src={getSiteUrl(image?.url)}
                                    alt="trusted company logo"
                                    width={180}
                                    height={60}
                                    className='max-w-full max-h-full object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trusted