import React from 'react'
import { Article } from '../Types'
import CarouselItem from './CarouselItem'
import UserPost from './UserPost'

type Props = {
    articles: Article[] | undefined
}

export default function UserArticles({ articles }: Props) {
    return (
        <div className='user-articles-container'>
            <h3>Home</h3>
            <ul className='user-articles-list'>
                {articles?.map(article => <UserPost article={article} key={article.id} />)}

            </ul>
        </div>
    )
}
