import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/SignUp.css'
import { SignUpFrom, User } from '../types'

type Props = {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

function comparePasswords(pass1: string, pass2: string) {
    return pass1 === pass2
}

export default function SignUp({ user, setUser }: Props) {
    const navigate = useNavigate()

    function signUp(firstName: string, lastName: string, email: string, bio: string, password: string) {
        fetch(`http://localhost:4000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, bio, password })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    localStorage.setItem('token', data.token)
                    setUser(data.user)
                }
            })
    }

    return (
        <div className='signup-container'>

            <form action="" className='signup-form' onSubmit={(e) => {
                e.preventDefault()
                const formEl = e.target as SignUpFrom;
                const firstName = formEl.fName.value;
                const lastName = formEl.lName.value;
                const email = formEl.email.value;
                const bio = formEl.bio.value;
                const password = formEl.password.value;
                const confirmPassword = formEl.confirmPass.value;

                const passwordsMatch = comparePasswords(password, confirmPassword)
                if (passwordsMatch) {
                    signUp(firstName, lastName, email, bio, password)
                    navigate('/')
                    formEl.reset()

                } else {
                    alert('Passwords don\'t match. Please try again!')
                }
            }}>
                <h1>Join our community!</h1>
                <input type="text" name="fName" placeholder='First name' required />
                <input type="text" name='lName' placeholder='Last name' required />
                <input type="email" name="email" placeholder='Email' required />
                <textarea name="bio" cols={5} rows={10} placeholder='Bio...'></textarea>
                <input type="text" name="avatar" placeholder='Avatar URL' />
                <input type="password" name="password" placeholder='Password' required />
                <input type="password" name="confirmPass" placeholder='Confirm password' required />
                <button type='submit' className='signup-button'>Sign up</button>
            </form>
        </div>
    )
}
