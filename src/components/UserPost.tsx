import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getCategories, getDate } from '../helpers'
import PositionedMenu from '../Menu/PositionedMenu'
import { Article, User } from '../Types'

type Props = {
    article: Article
    userMatches: boolean
}

export default function UserPost({ article, userMatches }: Props) {
    const navigate = useNavigate()
        return (
            <div className='user-page-item-container'>
                <img src={article.image} alt="" />
                <div className='additional-info'>
                    <div className='article-info'>
                        <div className='category-date-user'>
                            <span>{getCategories(article.categories)}</span>
                            <span className='date'> - {getDate(article.createdAt)}</span>
                            {
                                userMatches?
                                <PositionedMenu article={article} />
                                : null
                            }
                        </div>
                        <h1 
                            className='article-title'
                            onClick={()=>{
                                navigate(`/article/${article.id}`)
                            }}
                            >{article.title}</h1>
                        <p>
                            {article.intro}
                        </p>

                    </div>
                </div>
            </div>
        )
}
