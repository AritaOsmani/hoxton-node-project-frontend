import React from 'react'
import { Article, User } from '../Types'
import CarouselItem from './CarouselItem'
import UserPost from './UserPost'

type Props = {
    articles: Article[] | undefined
    userMatches: boolean
}

export default function UserArticles({ articles, userMatches }: Props) {
    return (
        <div className='user-articles-container'>
            <h3>Home</h3>
            <ul className='user-articles-list'>
                {articles?.map(article => <UserPost article={article} key={article.id} userMatches={userMatches} />)}

            </ul>
        </div>
    )
}
