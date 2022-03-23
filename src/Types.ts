export type User = {
    id: number,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    username: string,
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
    categories: Category[],
    author: User
}

export type Category = {
    id: number,
    name: string
}

export type SignUpFrom = HTMLFormElement & {
    fName: HTMLInputElement,
    lName: HTMLInputElement,
    email: HTMLInputElement,
    bio: HTMLTextAreaElement,
    password: HTMLInputElement,
    confirmPass: HTMLInputElement,
    avatar: HTMLInputElement,
    reset: () => void
}

export type LogInForm = HTMLFormElement & {
    email: HTMLInputElement,
    password: HTMLInputElement,
    reset: () => void
}

export type SubscribeForm = HTMLFormElement & {
    email: HTMLInputElement,
    reset: () => void
}
export type Like = {
    likes: number
}
export type PopularArticle = Article & {
    _count: Like
}