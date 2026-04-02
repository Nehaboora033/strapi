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
        url: API_URLS.LANDINGPAGE + '?populate=Faq&populate=Faq.accordianCard&populate=Faq.ctaFaq&populate=Faq.ctaFaq.links'
    })
}

export const lovedDataGet = async () => {
    return await handleApiRequest({
        method: GET_METHOD,
        url: API_URLS.LANDINGPAGE + '?populate=loved&populate=loved.sliderCard&populate=loved.sliderCard.profileImage&populate=loved.sliderCard.companyRating.companyLogo&populate=loved.sliderCard.companyRating.ratingStatus'
    })
}

export const footerDataGet = async () => {
    return await handleApiRequest({
        method: GET_METHOD,
        url: API_URLS.GLOBAL + '?populate=footer&populate=footer.logo&populate=footer.socialLinks&populate=footer.socialLinks.icon&populate=footer.content&populate=footer.content.icon&populate=footer.sectionLinks&populate=footer.sectionLinks.links'
    })
}