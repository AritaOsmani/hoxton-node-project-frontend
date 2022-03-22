import React from 'react'
import { getDate } from '../helpers'
import { Article } from '../Types'

type Props = {
    article: Article
}

export default function UserPost({ article }: Props) {
    return (
        <div className='user-page-item-container'>
            <img src={article.image} alt="" />
            <div className='additional-info'>
                <div className='article-info'>
                    <div className='category-date'>
                        {/* <span>Travel</span> */}
                        <span className='date'> - {getDate(article.createdAt)}</span>
                    </div>

                    <h1 className='article-title'>{article.title}</h1>
                    <p>
                        {article.intro}
                    </p>

                </div>
            </div>
        </div>

    )
}
