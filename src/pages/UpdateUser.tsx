import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/SignUp.css'
import { SignUpFrom, User } from '../Types'

type Props = {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

function comparePasswords(pass1: string, pass2: string) {
    return pass1 === pass2
}

export default function UpdateUser({ user, setUser }: Props) {
    const navigate = useNavigate()

    function updateUser(firstName: string, lastName: string, username:string, email: string, bio: string, password: string) {
        fetch(`http://localhost:4000/users/${user?.id}`, {
            method: 'PATCH',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, username, email, bio, password })
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
    if(!user) return <h1>Please login first</h1>
    return (
        <div className='signup-container'>

            <form action="" className='signup-form' onSubmit={(e) => {
                e.preventDefault()
                const formEl = e.target as SignUpFrom;
                const firstName = formEl.fName.value;
                const lastName = formEl.lName.value;
                const username = formEl.username.value;
                const email = formEl.email.value;
                const bio = formEl.bio.value;
                const password = formEl.password.value;
                const confirmPassword = formEl.confirmPass.value;

                const passwordsMatch = comparePasswords(password, confirmPassword)
                if (passwordsMatch) {
                    updateUser(firstName, lastName, username, email, bio, password)
                    navigate('/')
                    formEl.reset()

                } else {
                    alert('Passwords don\'t match. Please try again!')
                }
            }}>
                <h1>Update your profile</h1>
                <input type="text" defaultValue={user?.firstName} name="fName" placeholder='First name' required />
                <input type="text" defaultValue={user?.lastName} name='lName' placeholder='Last name' required />
                <input type="email" defaultValue={user?.email} name="email" placeholder='Email' required />
                <input type="text" defaultValue={user?.username} name='username' placeholder='Username' required />
                <textarea defaultValue={user?.bio} name="bio" cols={5} rows={5} placeholder='Bio...'></textarea>
                <input type="text" defaultValue={user?.avatarImage} name="avatar" placeholder='Avatar URL' />
                <input type="password"  name="password" placeholder='Password' required />
                <input type="password"  name="confirmPass" placeholder='Confirm password' required />
                <button type='submit' className='signup-button'>Sign up</button>
            </form>
        </div>
    )
}
