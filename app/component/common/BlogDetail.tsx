import Image from 'next/image'
import Heading from './Heading'
import Text from './Text'

const BlogDetail = ({ blogDetail }: { blogDetail: any }) => {
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
                                src={blogDetail.image}
                                alt='image'
                                width={400}
                                height={100}
                                className='object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BlogDetail