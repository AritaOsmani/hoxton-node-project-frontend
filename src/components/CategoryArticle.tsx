import React from 'react'

export default function CategoryArticle() {
    return (
        <div className='category-page-article-item'>
            <img src="https://preview.colorlib.com/theme/magdesign/images/ximg_4.jpg.pagespeed.ic.2DwdgZu3vw.webp" alt="" />
            <div className='category-page-article-info'>
                <div className='category-page-category-date-user'>
                    <span>Business, Travel</span>
                    <span className='category-page-date'> -July 2,2020</span>
                </div>
                <h1 className='category-page-article-title'>Your most unhappy customers are your greatest source of learning.</h1>
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className='author-info' onClick={(e) => {
                    e.stopPropagation()
                    // navigate(`/user/${trendingArticle.author.username}`)
                }}>
                    <img src="https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" alt="" />
                    <div className='name-bio'>
                        <span className='author-name'>Name Surname</span>
                        <span className='author-bio'>Lorem, ipsum dolor.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}