import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryArticle from '../components/CategoryArticle'
import PaginationSize from '../Pagination/PaginationSize'
import '../styles/CategoriesPage.css'

export default function CategoriesPage() {
    const params = useParams()
    return (
        <div className='categories-page-container'>
            <h1 className='category-title'>Travel</h1>
            <hr />
            <ul className='categories-articles-list'>
                <CategoryArticle />
                <CategoryArticle />
                <CategoryArticle />
                <CategoryArticle />
                <CategoryArticle />
            </ul>
            <div className='pagination-container'>
                <PaginationSize />
            </div>

        </div>
    )
}
