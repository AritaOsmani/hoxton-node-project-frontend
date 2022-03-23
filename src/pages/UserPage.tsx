import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserArticles from '../components/UserArticles'
import UserComponent from '../components/UserComponent'
import '../styles/UserPage.css'
import { User } from '../Types'

type Props = {
    user: User | null
    // currentUser: boolean
    // setCurrentUser: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UserPage({ user }: Props) {
    const params = useParams()
    const [userFetched, setUserFetched] = useState<User | null>(null)
    const [userMatches, setUserMatches] = useState(false)

    useEffect(() => {
        console.log("UseEffect Works")
        fetch(`http://localhost:4000/users/${params.username}`).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    alert(data.error)
                } else {
                    setUserFetched(data)
                }   
            })
    }, [params.username])

    useEffect(()=>{
        if(userFetched){
            if(userFetched?.id === user?.id){
                setUserMatches(true)
            }else{
                setUserMatches(false)
            } 
        }
    },[userFetched])

    if (userFetched === null) return <h1>User not found</h1>
    return (
        <div className='user-page-container'>
            <UserComponent user={userFetched} />
            <UserArticles articles={userFetched?.articles} userMatches={userMatches} />
        </div>
    )
}
