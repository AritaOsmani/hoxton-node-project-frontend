import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/LogIn.css'
import { LogInForm, User } from '../Types'

type Props = {
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export default function LogIn({ setUser }: Props) {
    const navigate = useNavigate()

    function login(email: string, password: string) {
        fetch(`http://localhost:4000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    localStorage.setItem('token', data.token)
                    setUser(data.user)
                    navigate('/')
                }
            })
    }
    return (
        <div className='login-container'>
            <form action="" className='login-form' onSubmit={(e) => {
                e.preventDefault()
                const formEl = e.target as LogInForm
                const email = formEl.email.value
                const password = formEl.password.value;
                login(email, password)
                formEl.reset()
            }}>
                <h1>Welcome</h1>
                <input type="email" name="email" placeholder='Email' required />
                <input type="password" name="password" placeholder='Password' required />
                <button type='submit' className='login-button'>Log in</button>
            </form>
        </div>
    )
}
