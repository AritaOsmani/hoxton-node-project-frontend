import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getCategories, getDate } from '../helpers'
import { Article } from '../Types'

type Props = {
    article: Article
}

export default function CategoryArticle({ article }: Props) {
    const navigate = useNavigate()
    return (
        <div className='category-page-article-item' onClick={() => {
            navigate(`/article/${article.id}`)
        }}>
            <img src={article.image} alt="" />
            <div className='category-page-article-info'>
                <div className='category-page-category-date-user'>
                    <span>{getCategories(article.categories)}</span>
                    <span className='category-page-date'> -{getDate(article.createdAt)}</span>
                </div>
                <h1 className='category-page-article-title'>{article.title}</h1>
                <p>
                    {article.intro}
                </p>
                <div className='author-info' onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/user/${article.author.username}`)
                }}>
                    <img src={article.author.avatarImage} alt="" />
                    <div className='name-bio'>
                        <span className='author-name'>{`${article.author.firstName} ${article.author.lastName}`}</span>
                        <span className='author-bio'>{article.author.bio}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}