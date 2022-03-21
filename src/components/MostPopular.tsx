import React from 'react'
import MostPopularArticle from './MostPopularArticle'

import '../styles/MostPopular.css'
import Carousel from 'react-material-ui-carousel'
export default function MostPopular() {
    return (
        <div className='most-popular-container'>
            <h1>Most Popular Articles</h1>
            <Carousel>
                <MostPopularArticle />
                <MostPopularArticle />
                <MostPopularArticle />
            </Carousel>

        </div>
    )
}
