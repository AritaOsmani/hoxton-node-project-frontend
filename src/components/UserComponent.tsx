import React from 'react'
import { User } from '../Types'

type Props = {
    user: User | null
}

export default function UserComponent({ user }: Props) {
    return (
        <div className='user-div'>
            <div className='user-info-container'>
                <img src={user?.avatarImage} alt="" className='avatar' />
                <h1>{`${user?.firstName} ${user?.lastName}`}</h1>
                <p>{user?.bio}</p>
            </div>

        </div>
    )
}
