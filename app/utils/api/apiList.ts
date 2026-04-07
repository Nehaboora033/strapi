/* eslint-disable @typescript-eslint/no-explicit-any */
import { DELETE_METHOD, GET_METHOD, handleApiRequest, POST_METHOD, PUT_METHOD } from "./fetchResponse"
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


// blog
export const blogDataGet = async () => {
    return await handleApiRequest({
        method: GET_METHOD,
        // url: API_URLS.BLOG + '?populate=thumbnail&sort=publishedAt:desc&populate=detailBlog&populate=detailBlog.image'
        url: API_URLS.BLOG + '?populate=thumbnail&populate=detailBlog&populate=detailBlog.image'

    })
}


// product slug

export const productDataGet = async (documentId?: string) => {
    return await handleApiRequest({
        method: GET_METHOD, 
        url: API_URLS.PRODUCT + (documentId ? `/${documentId}` : '')+ '?populate=thumbnail&populate=productDetail&populate=productDetail.keyPoints'
    })
}
// contact

export const contactDataGet = async () => {
    return await handleApiRequest({
        method: GET_METHOD,
        url: API_URLS.CONTACTPAGE + '?populate=operations&populate=operations.details'
    })
}

export const postFormData = async (data: any) => {
    return await handleApiRequest({
        method: POST_METHOD,
        url: API_URLS.CONTACT_FORM,
        data
    })
}

export const contactFormSubmitUser = async (documentId?: string) => {
    return handleApiRequest({
        method: GET_METHOD,
        url: API_URLS.CONTACT_FORM + (documentId ? `/${documentId}` : ''),
    })
}



export const contactFormSubmitUI = async () => {
    return handleApiRequest({
        method: GET_METHOD,
        url: API_URLS.CONTACT_SUMBIT_DETAILS + '?populate=contactSubmission&populate=contactSubmission.headersubmission'
    })
}



export const FormUserUpdate = async (data: any, id: string) => {
    return handleApiRequest({
        method: PUT_METHOD,
        url: API_URLS.CONTACT_FORM + `/${id}`,
        data
    })
}

export const FormUseDelete = async (id: string) => {
    return handleApiRequest({
        method: DELETE_METHOD,
        url: API_URLS.CONTACT_FORM + `/${id}`,

    })
}


