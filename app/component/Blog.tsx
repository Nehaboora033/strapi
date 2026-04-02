import React from 'react'
import Heading from './common/Heading'
import Text from './common/Text'
import Image from 'next/image'
import Link from 'next/link'
import {  BLOG_DETAILS } from '../utils/helper'
import { slugify } from '../utils/commonFun'

const Blog = () => {
    return (
        <div className='px-4 py-10'>
            <div className='max-w-[1140px] mx-auto'>
                <div className='flex items-center justify-between'>
                    <Heading className="max-w-[450px] mb-[50px] w-full">
                        Upholstery Tips, Blog
                    </Heading>
                    <Text className='max-w-[430px] w-full'>
                        Refresh your sofa with the right fabrics, foam, and expert advice plus a breakdown of reupholstery costs in Singapore.
                    </Text>
                </div>
                <div className='grid grid-cols-3 gap-4 '>
                    {BLOG_DETAILS.map((obj, index) => (
                        <Link key={index} href={`/blog/${slugify(obj.title)}`} className='block h-full'>
                            <div className='border rounded-lg p-4 h-full flex flex-col' >
                                <Image
                                    src={obj.image}
                                    alt='image'
                                    className='object-cover mb-4 w-full h-[280px] rounded-md' width={350}
                                    height={350}

                                />
                                <h5 className='text-xl mb-2 font-semibold text-green'>
                                    {obj.title}
                                </h5>
                                <p className='text-gray-600'>
                                    {obj.description}
                                </p>
                                
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog