import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Header.css'
import { User } from '../types'

type Props = {
    user: User | null
}
export default function Header({ user }: Props) {
    const navigate = useNavigate()

    if (user) {
        return (
            <div className='header-container'>
                <form action="" className='search-from'>
                    <input type="text" name="search" placeholder='Search...' />
                </form>
                <h1>HOXBLOG</h1>
                <div className='user-info'>
                    <i className="fas fa-user"></i>
                    <span>{user.firstName}</span>
                    <i className="far fa-angle-down"></i>
                </div>
                <i className="fal fa-bars"></i>
            </div>
        )
    }

    return (
        <div className='header-container'>
            <form action="" className='search-from'>
                <input type="text" name="search" placeholder='Search...' />
            </form>
            <h1>HOXBLOG</h1>
            <div className='sg-lg-buttons'>
                <button className='login-btn'>Log in</button>
                <button className='signup-btn' onClick={() => {
                    navigate('/signup')
                }}>Sign up</button>
            </div>
            <i className="fal fa-bars"></i>
        </div>
    )
}
