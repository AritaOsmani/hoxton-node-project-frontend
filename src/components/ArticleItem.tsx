import React from 'react'

export default function ArticleItem() {
    return (
        <div className='article-item'>
            <img className='article-img' src="https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp" alt="" />
            <div className='article-info'>
                <div className='category-date'>
                    <span>Business,Travel</span>
                    <span className='date'> -July 2, 2020</span>
                </div>

                <h1 className='article-title'>Your most unhappy customers are your greatest source of learning.</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div className='author-info'>
                    <img src="https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" alt="" />
                    <div className='name-bio'>
                        <span className='author-name'>Name Surname</span>
                        <span className='author-bio'>bio</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
