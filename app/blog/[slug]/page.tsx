import BlogDetail from '@/app/component/common/BlogDetail'
import { slugify } from '@/app/utils/commonFun'
import { BLOG_DETAILS } from '@/app/utils/helper'

const page = async ({ params }: { params: {slug:string} }) => {
    const {slug} = await params
    const blogDetail = BLOG_DETAILS.find(
        (obj) => slugify(obj.title) === slug
    )
    if (!blogDetail) return <div className="pt-8 text-center">Blog not found {BLOG_DETAILS[0].title} {slug}</div>
    return (
        <div>
            <BlogDetail blogDetail={blogDetail} />
        </div>
    )
}

export default page