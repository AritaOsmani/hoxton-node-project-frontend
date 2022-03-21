import React from 'react'
import '../styles/Newsletter.css'
export default function Newsletter() {
    return (
        <div className='newsletter-container'>
            <h3>Subscribe to newsletter</h3>
            <form action="" className='subscribe-form'>
                <input type="email" placeholder='Email' required />
                <button type='submit' className='sub-btn'>Subscribe</button>
            </form>
        </div>
    )
}
