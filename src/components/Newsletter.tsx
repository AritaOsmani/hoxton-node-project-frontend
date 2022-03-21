import React from 'react'
import '../styles/Newsletter.css'
import { SubscribeForm } from '../Types'
export default function Newsletter() {

    function subscribe(email: string) {
        fetch(`http://localhost:4000/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        }).then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error)
                }
            })
    }
    return (
        <div className='newsletter-container'>
            <h3>Subscribe to newsletter</h3>
            <form action="" className='subscribe-form' onSubmit={(e) => {
                e.preventDefault()
                const formEl = e.target as SubscribeForm
                const email = formEl.email.value;
                subscribe(email)
                formEl.reset()
            }}>
                <input type="email" placeholder='Email' name='email' required />
                <button type='submit' className='sub-btn'>Subscribe</button>
            </form>
        </div>
    )
}
