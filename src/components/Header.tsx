import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Header.css'
import { User, Category } from '../Types'

type Props = {
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}
export default function Header({ user, setUser }: Props) {
    const navigate = useNavigate()
    const [accMenu, setAccMenu] = useState(false)
    const [sideMenu, setSideMenu] = useState(false)
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        fetch(`http://localhost:4000/categories`).then(res => res.json()).then(data => setCategories(data))
    }, [])

    function signOut() {
        localStorage.removeItem('token')
        setUser(null)
        setAccMenu(false)
    }

    if (user) {
        return (
            <div className='header-container'>
                <form action="" className='search-from'>
                    <input type="text" name="search" placeholder='Search...' />
                </form>
                <h1 onClick={() => {
                    navigate('/')
                }}>HOXBLOG</h1>
                <div className='user-info' onClick={() => {
                    if (accMenu) {
                        setAccMenu(false)
                    } else {
                        setAccMenu(true)
                    }

                }}>
                    <i className="fas fa-user"></i>
                    <span>{user.firstName}</span>
                    <i className="far fa-angle-down"></i>
                </div>
                {accMenu ? <div className='acc-info'>
                    <span>My account</span>
                    <span onClick={() => {
                        signOut()
                    }}>Sign out</span>
                </div> : null}
                <i className="fal fa-bars" onClick={() => {

                    setSideMenu(true)

                }}></i>
                {sideMenu ? <div className='side-menu'>
                    <button className='close-btn' onClick={() => {
                        setSideMenu(false)
                    }}>X</button>
                    <span>Home</span>
                    {categories.map(category => <span>{category.name}</span>)}


                </div> : null}

            </div>
        )
    }

    return (
        <div className='header-container'>
            <form action="" className='search-from'>
                <input type="text" name="search" placeholder='Search...' />
            </form>
            <h1 onClick={() => {
                navigate('/')
            }}>HOXBLOG</h1>
            <div className='sg-lg-buttons'>
                <button className='login-btn' onClick={() => {
                    navigate('/login')
                }}>Log in</button>
                <button className='signup-btn' onClick={() => {
                    navigate('/signup')
                }}>Sign up</button>
            </div>
            <i className="fal fa-bars" onClick={() => {

                setSideMenu(true)

            }}></i>
            {sideMenu ? <div className='side-menu'>
                <button className='close-btn' onClick={() => {
                    setSideMenu(false)
                }}>X</button>
                <span>Home</span>
                {categories.map(category => <span>{category.name}</span>)}

            </div> : null}
        </div>
    )
}
