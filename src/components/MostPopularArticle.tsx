import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getCategories, getDate } from '../helpers'
import { PopularArticle } from '../Types'

type Props = {
    popularArticle: PopularArticle
}

export default function MostPopularArticle({ popularArticle }: Props) {
    const navigate = useNavigate()
    return (
        <div className='most-popular-article' onClick={() => {
            navigate(`/article/${popularArticle.id}`)
        }}>
            <img src={popularArticle.image} alt="" />
            <div className='category-date'>
                <span className='category'>{getCategories(popularArticle.categories)}</span>
                <span className='date'>-{getDate(popularArticle.createdAt)}</span>
            </div>
            <h1>{popularArticle.title}</h1>
            <p>{popularArticle.intro}</p>
            <div className='author-info' onClick={(e) => {
                e.stopPropagation()
                navigate(`/user/${popularArticle.author.username}`)
            }}>
                <img src={popularArticle.author.avatarImage} alt="" />
                <div className='name-bio'>
                    <span className='author-name'>{`${popularArticle.author.firstName} ${popularArticle.author.lastName}`}</span>
                    <span className='author-bio'>{popularArticle.author.bio}</span>
                </div>
            </div>

        </div>
    )
}
