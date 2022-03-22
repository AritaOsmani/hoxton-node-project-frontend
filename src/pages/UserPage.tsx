import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserArticles from '../components/UserArticles'
import UserComponent from '../components/UserComponent'
import '../styles/UserPage.css'
import { User } from '../Types'

export default function UserPage() {
    const params = useParams()
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        fetch(`http://localhost:4000/users/${params.username}`).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setUser(data)
                }
            })
    }, [params.username])

    return (
        <div className='user-page-container'>
            <UserComponent user={user} />
            <UserArticles articles={user?.articles} />
        </div>
    )
}
