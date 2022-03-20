export type User = {
    id: number,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    bio?: string,
    avatarImage: string,
    joinedAt: string,
    articles?: Article[]
}

export type Article = {
    id: number,
    title: string,
    image: string,
    intro: string,
    content: string,
    createdAt: string,
    userId: number,
    categories: Category[]
}

export type Category = {
    id: number,
    name: string
}