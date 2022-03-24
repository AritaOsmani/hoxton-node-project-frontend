import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getCategories, getDate } from '../helpers'
import PositionedMenu from '../Menu/PositionedMenu'
import { Article, User } from '../Types'

type Props = {
    article: Article
    userMatches: boolean
    userFetchedArticles: Article[]
    setUserFetchedArticles: React.Dispatch<React.SetStateAction<Article[]>>
}


export default function UserPost({ article, userMatches, userFetchedArticles, setUserFetchedArticles }: Props) {
    const navigate = useNavigate()

    function deleteArticle(articleId: number) {
        fetch(`http://localhost:4000/article/${articleId}`, {
            method: 'DELETE',
            headers: {
                Authorization: localStorage.token
            }
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    const articlesCopy: Article[] = JSON.parse(JSON.stringify(userFetchedArticles))
                    const newArticles = articlesCopy.filter(a => a.id !== articleId)
                    setUserFetchedArticles(newArticles)
                }
            })
    }


    return (
        <div className='user-page-item-container'>
            <img src={article.image} alt="" />
            <div className='additional-info'>
                <div className='article-info'>
                    <div className='category-date-user'>
                        <span>{getCategories(article.categories)}</span>
                        <span className='date'> - {getDate(article.createdAt)}</span>
                        {
                            userMatches ?
                                <PositionedMenu article={article} deleteArticle={deleteArticle} />
                                : null
                        }
                    </div>
                    <h1
                        className='article-title'
                        onClick={() => {
                            navigate(`/article/${article.id}`)
                        }}
                    >{article.title}</h1>
                    <p>
                        {article.intro}
                    </p>

                </div>
            </div>
        </div>
    )
}
