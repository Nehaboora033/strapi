import BlogDetail from '@/app/component/common/BlogDetail'
import { blogDataGet } from '@/app/utils/api/apiList'
import { slugify } from '@/app/utils/commonFun'
import { BLOG_DETAILS } from '@/app/utils/helper'
import {  blogProps } from '@/app/utils/type'

const page = async ({ params }: { params: { slug: string } }) => {

    const blogData = await blogDataGet()
    // console.log(blogData,"hello blog")
    const blogInfo: blogProps[] = blogData.data
    // console.log(blogInfo, "blogdetail")


    const { slug } = await params
    const blogDetail = blogInfo.find(
        (obj) => slugify(obj.title) === slug
    )
    
    if (!blogDetail) return <div className="pt-8 text-center">Blog not found {BLOG_DETAILS[0].title} {slug}</div>
    return (
        <div>
            <BlogDetail blogDetail={blogDetail}  />
        </div>
    )
}

export default page