interface Collection {
    id: string,
    cdn: string,
    web340: string,
    web640: string,
}

interface FullImage {
    id: string,
    tags: string,
    cdn: string,
    web340: string,
    web640: string,
    image: string,
    imageSize: number,
    view: number,
    downloads: number,
    likes: number,
    owner: string,
    ownerDp: string,
}

export {Collection, FullImage};