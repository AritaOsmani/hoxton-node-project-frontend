import React from 'react'
import ArticleItem from './ArticleItem'
import '../styles/ArticleSection.css'

export default function ArticlesSection() {
    return (
        <div className='articles-section'>
            <ul className='articles-list'>
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
            </ul>
        </div>
    )
}
