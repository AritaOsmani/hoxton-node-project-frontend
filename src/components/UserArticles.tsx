import React from 'react'
import { Article, User } from '../Types'
import CarouselItem from './CarouselItem'
import UserPost from './UserPost'

type Props = {
    userFetchedArticles: Article[] | undefined
    setUserFetchedArticles: React.Dispatch<React.SetStateAction<Article[]>>
    userMatches: boolean
}

export default function UserArticles({ userFetchedArticles, userMatches, setUserFetchedArticles }: Props) {
    return (
        <div className='user-articles-container'>
            <h3>Home</h3>
            <ul className='user-articles-list'>
                {userFetchedArticles?.map(article => <UserPost article={article} key={article.id} userMatches={userMatches} userFetchedArticles={userFetchedArticles} setUserFetchedArticles={setUserFetchedArticles} />)}

            </ul>
        </div>
    )
}
