import Image from 'next/image'
import { keyPointsProps, productProps } from '../utils/type'
import Heading from './common/Heading'
import { getSiteUrl } from '../utils/commonFun'
import Text from './common/Text'

const ProductDetail = async ({ product }: { product: productProps }) => {
    console.log(product, "product detail")
    return (
        <div className='px-4 py-10'>
            <div className='max-w-[1140px] mx-auto'>
                <div>
                    <Heading className='text-[30px]!'>
                        {product?.title}
                    </Heading>

                    <Image
                        src={getSiteUrl(product.thumbnail.url)}
                        alt='image'
                        className='object-cover mt-4 mx-auto'
                        width={1100}
                        height={500}
                    />

                    <h4 className='mt-4 text-[30px]'>
                        {product?.productDetail?.heading}
                    </h4>
                    <Text className=" mt-4">
                        {product.productDetail.description}
                    </Text>
                    <div>
                        <h3>
                            {product.productDetail.keyPoints.map((item: keyPointsProps, index) => (
                                <div className='' key={index}>
                                    <h3 className='text-[30px] mt-4 font-bold'>
                                        {item.title}
                                    </h3>
                                    <li className='points text-base mt-4 space-y-4' dangerouslySetInnerHTML={{ __html: item.list }}>
                                    </li>
                                </div>
                            ))}
                        </h3>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDetail