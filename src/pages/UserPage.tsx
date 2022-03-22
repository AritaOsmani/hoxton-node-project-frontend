import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserArticles from '../components/UserArticles'
import UserComponent from '../components/UserComponent'
import '../styles/UserPage.css'
import { User } from '../Types'

type Props = {
    userLoggedIn: User | null
    currentUser: boolean
    setCurrentUser: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UserPage({ userLoggedIn, currentUser, setCurrentUser }: Props) {
    const params = useParams()
    const [user, setUser] = useState<User | null>(null)
    // const [currentUser, setCurrentUser] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:4000/users/${params.username}`).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setUser(data)
                    if (data.username === userLoggedIn?.username) {
                        setCurrentUser(true)
                    }
                }
            })
    }, [params.username, userLoggedIn])

    if (user === null) return <h1>User not found</h1>
    return (
        <div className='user-page-container'>
            <UserComponent user={user} />
            <UserArticles articles={user?.articles} currentUser={currentUser} />
        </div>
    )
}
