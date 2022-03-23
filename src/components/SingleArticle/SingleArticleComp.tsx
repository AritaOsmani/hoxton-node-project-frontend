import { getDate } from "../../helpers"
import { Article } from "../../Types"
import WysiwygEditorReadOnly from "../WysiwygEditor/WysigEditorReadOnly"
import './SingleArticleComp.css'

type Props = {
    article: Article
}

export default function SingleArticleComp({article}:Props){
    return(
    <div className="singleArticle">
        <div className="single-author-info">
            <div className="author-img">
                <img src={article?.author.avatarImage} alt="" />
            </div>
            <h4>{article?.author.firstName} {article?.author.lastName}</h4>
            <p>{getDate(article.createdAt)}</p>
        </div>
        <h1>{article?.title}</h1>
        <p>{article?.intro}</p>
        <img  className="main-img" src={article?.image} alt="" />
        <WysiwygEditorReadOnly contentState={JSON.parse(article?.content)} />
    </div>
    )
}