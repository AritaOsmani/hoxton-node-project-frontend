import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getCategories, getDate } from '../helpers'
import PositionedMenu from '../Menu/PositionedMenu'
import { Article } from '../Types'

type Props = {
    article: Article
    currentUser: boolean
}

export default function UserPost({ article, currentUser }: Props) {
    const navigate = useNavigate()
    if (currentUser) {
        return (
            <div className='user-page-item-container'>
                <img src={article.image} alt="" />
                <div className='additional-info'>
                    <div className='article-info'>
                        <div className='category-date-user'>
                            <span>{getCategories(article.categories)}</span>
                            <span className='date'> - {getDate(article.createdAt)}</span>
                            {/* <i className="far fa-ellipsis-h"></i> */}
                            <PositionedMenu article={article} />
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

    return (
        <div className='user-page-item-container'>
            <img src={article.image} alt="" />
            <div className='additional-info'>
                <div className='article-info'>
                    <div className='category-date'>
                        <span>{getCategories(article.categories)}</span>
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
