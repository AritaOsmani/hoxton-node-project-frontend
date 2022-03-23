import { useNavigate } from "react-router-dom"
import { getCategories, getDate } from "../helpers"
import { Article } from "../Types"

type Props = {
    article: Article
}

export default function ArticleItem({ article }: Props) {
    const navigate = useNavigate()

    return (
        <div className='article-item' onClick={() => {
            navigate(`/article/${article.id}`)
        }}>
            <img className='article-img' src={article.image} alt="" />
            <div className='article-info-2'>
                <div className='category-date'>
                    <span>{getCategories(article.categories)}</span>
                    <span className='date'> -{getDate(article.createdAt)}</span>
                </div>

                <h1 className='article-title'>{article.title}.</h1>
                <p>{article.intro}</p>
                <div className='author-info' onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/user/${article.author.username}`)
                }}>
                    <img src={article.author.avatarImage} alt="" />
                    <div className='name-bio'>
                        <span className='author-name'>{`${article.author.firstName} ${article.author.lastName}`}</span>
                        <span className='author-bio'>{article.author.bio}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
