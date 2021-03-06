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
    const [totalNumOfPages, setTotalNumOfPages] = useState(1)

    useEffect(() => {
        setPageNumber(1)
        setTotalNumOfPages(1)
    }, [categoryName])

    useEffect(() => {

        if (localStorage.token) {
            fetch(`http://localhost:4000/articles/${categoryName}?page=${pageNumber}`, {
                headers: {
                    Authorization: localStorage.token
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        setCategoryArticles(data.articles)
                        setTotalNumOfPages(Math.ceil(data.pageCount))
                    }
                })
        } else {
            fetch(`http://localhost:4000/articles/${categoryName}?page=${pageNumber}`).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        setCategoryArticles(data.articles)
                        setTotalNumOfPages(Math.ceil(data.pageCount))
                    }
                })
        }

    }, [categoryName, pageNumber, localStorage.token])
    return (
        <div className='categories-page-container'>
            <h1 className='category-title'>{params.category}</h1>
            <hr />
            <ul className='categories-articles-list'>
                {categoryArticles.map(categoryArticle => <CategoryArticle key={categoryArticle.id} article={categoryArticle} />)}

            </ul>
            <div className='pagination-container'>
                <PaginationSize setPageNumber={setPageNumber} totalNumOfPages={totalNumOfPages} />
            </div>

        </div>
    )
}