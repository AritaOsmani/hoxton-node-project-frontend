import React, { useEffect, useState } from 'react'
import CarouselItem from './CarouselItem'
import '../styles/TrendingSection.css'
import Carousel from 'react-material-ui-carousel'
import { Article } from '../Types'
export default function TrendingSection() {
    const [trendingArticles, setTrendingArticles] = useState<Article[]>([])

    useEffect(() => {
        fetch(`http://localhost:4000/articles`).then(res => res.json()).then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                setTrendingArticles(data)
            }
        })
    }, [])

    return (
        <div className='trending-container'>
            <h1>Trending</h1>
            <Carousel
                interval={2000}
                animation="slide"
                fullHeightHover
                swipe
            >
                {trendingArticles.map(item => <CarouselItem trendingArticle={item} key={item.id} />)}
            </Carousel>
        </div>
    )
}
