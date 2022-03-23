import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryArticle from '../components/CategoryArticle'
import PaginationSize from '../Pagination/PaginationSize'
import '../styles/CategoriesPage.css'
import { Article } from '../Types'

export default function CategoriesPage() {
    const params = useParams()
    const categoryName = params.category
    const [categoryArticles, setCategoryArticles] = useState<Article[]>([])
    const [pageNumber, setPageNumber] = useState(1)
    const [totalNumOfArticles, setTotalNumOfArticles] = useState(1)


    useEffect(() => {
        // if (pageNumber > totalNumOfArticles) {
        //     setPageNumber(1)
        // }
        fetch(`http://localhost:4000/articles/${categoryName}?page=${pageNumber}`).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setCategoryArticles(data.articles)
                    setTotalNumOfArticles(data.articlesCount)
                }
            })
    }, [categoryName, pageNumber])

    return (
        <div className='categories-page-container'>
            <h1 className='category-title'>{params.category}</h1>
            <hr />
            <ul className='categories-articles-list'>
                {categoryArticles.map(categoryArticle => <CategoryArticle key={categoryArticle.id} article={categoryArticle} />)}

            </ul>
            <div className='pagination-container'>
                <PaginationSize setPageNumber={setPageNumber} totalNumOfArticles={totalNumOfArticles} />
            </div>

        </div>
    )
}