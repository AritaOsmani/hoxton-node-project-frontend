import React, { useEffect, useState } from 'react'
import ArticleItem from './ArticleItem'
import '../styles/ArticleSection.css'
import { Article } from '../Types'

export default function ArticlesSection() {
    const [articles, setArticles] = useState<Article[]>([])


    useEffect(() => {

        if (localStorage.token) {
            fetch(`http://localhost:4000/articles?page=1`, {
                headers: {
                    Authorization: localStorage.token
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        setArticles(data.articles)

                    }
                })
        } else {
            fetch(`http://localhost:4000/articles?page=1`).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        setArticles(data.articles)

                    }
                })
        }


    }, [localStorage.token])

    return (
        <div className='articles-section'>
            <ul className='articles-list'>
                {articles.map(article => <ArticleItem key={article.id} article={article} />)}


            </ul>
        </div>
    )
}
