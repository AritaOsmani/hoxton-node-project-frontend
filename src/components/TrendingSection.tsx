import React from 'react'
import CarouselItem from './CarouselItem'
import '../styles/TrendingSection.css'
import Carousel from 'react-material-ui-carousel'
export default function TrendingSection() {
    const arr = [1, 2]
    return (
        <div className='trending-container'>
            <h1>Trending</h1>
            <Carousel>
                {
                    arr.map(item => <CarouselItem />)
                }
            </Carousel>
            {/* <CarouselItem /> */}
        </div>
    )
}
