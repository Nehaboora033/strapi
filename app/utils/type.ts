export interface blogProps {
    title: string,
    description: string,
    thumbnail: {
        url: string,
    }

    detailBlog: BlogNested[],
    lists: string[],
}

export interface BlogNested {
    title: string
    description: string
    image: {
        url: string,
    },
    lists: string[],
}

export interface contactProps {
    title: string,
    details: {
        title: string,
        description: string,
    }[],
}

export interface formSubmitProps {
    id: number,
    name: string,
    email: string,
    phoneNumber: string,
    message: string,
    documentId: string,
}[]


export interface submitUserProps {
    title: string,
    description: string,
    headersubmission: {
        title: string,
    }[]
}


export interface productProps {
    title: string,
    description: string,
    thumbnail: {
        url: string,
    },
    documentId: string,
    productDetail: productDetailProps,
}

export interface productDetailProps {
    heading: string,
    description: string,
    keyPoints: keyPointsProps[],

}

export interface keyPointsProps {
    title: string,
    list: string,
}