import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getCategories, getDate } from '../helpers'
import '../styles/Carouseltem.css'
import { Article } from '../Types'

type Props = {
    trendingArticle: Article
}

export default function CarouselItem({ trendingArticle }: Props) {
    const navigate = useNavigate()

    return (
        <div className='carousel-item-container'>
            <img src={trendingArticle.image} alt="" />
            <div className='article-info'>
                <div className='category-date'>
                    <span>{getCategories(trendingArticle.categories)}</span>
                    <span className='date'> - {getDate(trendingArticle.createdAt)}</span>
                </div>

                <h1
                    className='article-title'
                    onClick={()=>{
                        navigate(`/article/${trendingArticle.id}`)
                    }}
                    >{trendingArticle.title}</h1>
                <p>{trendingArticle.intro}</p>
                <div className='author-info' onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/user/${trendingArticle.author.username}`)
                }}>
                    <img src={trendingArticle.author.avatarImage} alt="" />
                    <div className='name-bio'>
                        <span className='author-name'>{`${trendingArticle.author.firstName} ${trendingArticle.author.lastName}`}</span>
                        <span className='author-bio'>{trendingArticle.author.bio}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
