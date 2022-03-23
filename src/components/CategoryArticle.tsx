import React from 'react'
import { getCategories, getDate } from '../helpers'
import { Article } from '../Types'

type Props = {
    article: Article
}

export default function CategoryArticle({ article }: Props) {
    return (
        <div className='category-page-article-item'>
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
                    // navigate(`/user/${trendingArticle.author.username}`)
                }}>
                    <img src="https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" alt="" />
                    <div className='name-bio'>
                        <span className='author-name'>Name Surname</span>
                        <span className='author-bio'>Lorem, ipsum dolor.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}