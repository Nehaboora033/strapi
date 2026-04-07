import React from 'react'
import Image from 'next/image'
import Text from './common/Text'
import { productDataGet } from '../utils/api/apiList'
import { productProps } from '../utils/type'
import { getSiteUrl, slugify } from '../utils/commonFun'
import Link from 'next/link'

const Product = async () => {
    const productData = await productDataGet();
    // console.log(productData.data, "product data");
    const productDetail:productProps[] = productData.data

    return (
        <div className='px-4 py-10'>
            <div className='max-w-[1140px] mx-auto'>
                <h2 className='text-[#112D49] text-custom-lg font-semibold mb-10 text-center'>
                    BestSellers Products
                </h2>
                <div className='grid grid-cols-3 gap-4'>
                    {productDetail.map((item, index) => (
                        <Link href={`/products/${item.documentId}`} className='rounded-lg p-4 border ' key={index}>
                            <Image
                                src={getSiteUrl(item.thumbnail.url)}
                                className='object-cover rounded-2xl'
                                alt='image'
                                width={400}
                                height={270}
                            />
                            <div>
                                <h3 className='text-[22px]  mt-3 text-black font-semibold'>
                                    {item.title}
                                </h3>
                                <Text className='mt-3 text-[20px] text-grey'>
                                    {item.description}
                                </Text>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product