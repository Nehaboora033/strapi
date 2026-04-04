import Image from 'next/image'
import Heading from './Heading'
import Text from './Text'
import { getSiteUrl } from '@/app/utils/commonFun'
import { blogProps } from '@/app/utils/type'

const BlogDetail = async ({ blogDetail }: { blogDetail: blogProps }) => {
    // console.log(blogDetail.detailBlog, "hello belogdetail")
    return (
        <div className='p-10 px-4'>
            <div className='max-w-[1140px] mx-auto'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-3'>
                        <Heading className='text-2xl font-semibold '>
                            {blogDetail.title}
                        </Heading>
                        <Text>
                            {blogDetail.description}
                        </Text>
                        <div className=''>
                            <Image
                                src={getSiteUrl(blogDetail.thumbnail.url)}
                                alt='image'
                                width={400}
                                height={100}
                                className='object-cover'
                            />
                        </div>
                    </div>
                    {blogDetail.detailBlog?.map((obj, i: number) => (
                        <div className='' key={i}>
                            <h2 className='text-black text-[30px] my-4'>
                                {obj.title}
                            </h2>
                            <Text className='mb-4'>
                                {obj.description}
                            </Text>
                            {obj.image && (
                                <Image
                                    src={getSiteUrl(obj.image.url)}
                                    alt='image'
                                    className='object-cover'
                                    width={700}
                                    height={450}
                                />
                            )}

                            <ul>
                                <li className='prose mt-3 flex flex-col gap-3' dangerouslySetInnerHTML={{ __html: obj.lists }} >

                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default BlogDetail