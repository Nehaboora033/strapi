export interface blogProps {
    title: string,
    description: string,
    thumbnail: {
        url: string,
    }
    
    detailBlog: BlogNested[]
}

export interface BlogNested {
    title: string
    description: string
    image: {
        url: string,
    }
}