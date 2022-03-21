import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='socials-buttons'>
                <button className='facebook-btn'><i className="fab fa-facebook-f"></i></button>
                <button className='twitter-btn'><i className="fab fa-twitter"></i></button>
                <button className='linkedIn-btn'><i className="fab fa-linkedin-in"></i></button>
                <button className='youtube-btn'><i className="fab fa-youtube"></i></button>
            </div>
            <span className='copyright'>Copyright ©2022 All rights reserved </span>
            <span className='terms-co'>Terms & Conditions/ Privacy Policy</span>
        </div>
    )
}
