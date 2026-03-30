import { GET_METHOD, handleApiRequest } from "./fetchResponse"
import { API_URLS } from "./fetchUrls"

export const navigationDataGet = async()=>{
    return await handleApiRequest({
        method:GET_METHOD,
        url:API_URLS.GLOBAL+'?populate=header.logo&populate=header.links&populate=header.navCta'
    })
}