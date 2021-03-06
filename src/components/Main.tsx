import React from 'react'
import TrendingSection from './TrendingSection'
import '../styles/Main.css'
import ArticlesSection from './ArticlesSection'
import MostPopular from './MostPopular'
import Newsletter from './Newsletter'
export default function Main() {
    return (
        <div className='main-container'>
            <TrendingSection />
            <ArticlesSection />
            <MostPopular />
            <Newsletter />
        </div>
    )
}
