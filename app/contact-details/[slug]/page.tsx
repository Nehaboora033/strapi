import React from 'react'
import SingleContactDetail from '@/app/component/common/SingleContactDetail'
import { contactFormSubmitUser } from '@/app/utils/api/apiList'

const page = async ({params} : {params:{slug:string}}) => {
const {slug} = await params
const detail =  await contactFormSubmitUser(slug)
const  singleDetail=detail.data
 

    return (
        <div>
            <SingleContactDetail singleDetail={singleDetail}/>
        </div>
    )
}

export default page
