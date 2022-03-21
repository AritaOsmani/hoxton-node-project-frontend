import React from 'react'
import { getCategories, getDate } from '../helpers'
import '../styles/Carouseltem.css'
import { Article } from '../types'

type Props = {
    trendingArticle: Article
}

export default function CarouselItem({ trendingArticle }: Props) {

    return (
        <div className='carousel-item-container'>
            <img src={trendingArticle.image} alt="" />
            <div className='article-info'>
                <div className='category-date'>
                    <span>{getCategories(trendingArticle.categories)}</span>
                    <span className='date'> - {getDate(trendingArticle.createdAt)}</span>
                </div>

                <h1 className='article-title'>{trendingArticle.title}</h1>
                <p>{trendingArticle.intro}</p>
                <div className='author-info'>
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
