import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArticleItem from '../components/ArticleItem'
import { Article } from '../Types'
import '../styles/SearchedArticles.css'

export default function SearchedArticles() {
    const params = useParams()
    const [searchedArticles, setSearchedArticles] = useState<Article[]>([])

    useEffect(() => {
        fetch(`http://localhost:4000/search?search=${params.search}`).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setSearchedArticles(data)
                }
            })
    }, [params.search])

    if (searchedArticles.length === 0) {
        return <div className='not-found-container'>
            <h1 className='not-found'>No matches found!</h1>
        </div>

    }

    return (
        <div className='searched-articles-container'>
            <h1 className='search-title'>{`You searched for: ${params.search}`}</h1>
            <ul className='searched-articles-list-container'>
                {searchedArticles.map(article => <ArticleItem article={article} key={article.id} />)}
            </ul>
        </div>
    )
}
