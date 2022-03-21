import React from 'react'
import CarouselItem from './CarouselItem'
import UserPost from './UserPost'

export default function UserArticles() {
    return (
        <div className='user-articles-container'>
            <h3>Home</h3>
            <ul className='user-articles-list'>
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
            </ul>
        </div>
    )
}
