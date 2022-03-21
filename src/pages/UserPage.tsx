import React from 'react'
import { useParams } from 'react-router-dom'
import UserArticles from '../components/UserArticles'
import UserComponent from '../components/UserComponent'
import '../styles/UserPage.css'

export default function UserPage() {
    const params = useParams()
    return (
        <div className='user-page-container'>
            <UserComponent />
            <UserArticles />
        </div>
    )
}
