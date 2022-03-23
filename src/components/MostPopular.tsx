import React, { useEffect, useState } from 'react'
import MostPopularArticle from './MostPopularArticle'
import '../styles/MostPopular.css'
import Carousel from 'react-material-ui-carousel'
import { PopularArticle } from '../Types'
export default function MostPopular() {
    const [popularArticles, setPopularArticles] = useState<PopularArticle[]>([])

    useEffect(() => {
        fetch(`http://localhost:4000/popular`).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setPopularArticles(data)
                }
            })
    }, [])

    return (
        <div className='most-popular-container'>
            <h1>Most Popular Articles</h1>
            <Carousel>
                {popularArticles.map(popularArticle => <MostPopularArticle popularArticle={popularArticle} key={popularArticle.id} />)}
            </Carousel>

        </div>
    )
}
