import { GET_METHOD, handleApiRequest } from "./fetchResponse"
import { API_URLS } from "./fetchUrls"

export const navigationDataGet = async () => {
    return await handleApiRequest({
        method: GET_METHOD,
        url: API_URLS.GLOBAL + '?populate=header.logo&populate=header.links&populate=header.navCta'
    })
}


export const heroDataGet = async () => {
    return await handleApiRequest({
        method: GET_METHOD,
        url: API_URLS.LANDINGPAGE + '?populate=hero&populate=hero.cta&populate=hero.image&populate=hero.review&populate=hero.review.ratingImage&populate=hero.review.companyLogo'
    })
}

export const trustedDataGet = async () => {
    return await handleApiRequest({
        method: GET_METHOD,
        url: API_URLS.LANDINGPAGE + '?populate=trusted&populate=trusted.image'
    })
}

export const faqDataGet = async () => {
    return await handleApiRequest({
        method: GET_METHOD,
        url: API_URLS.LANDINGPAGE + '?populate=Faq&populate=Faq.accordianCard'
    })
}