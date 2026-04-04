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