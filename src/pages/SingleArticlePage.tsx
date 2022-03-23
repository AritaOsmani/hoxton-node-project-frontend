import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SingleArticleComp from "../components/SingleArticle/SingleArticleComp"
import WysiwygEditorReadOnly from "../components/WysiwygEditor/WysigEditorReadOnly"
import { Article } from "../Types"

export default function SingleArticle(){
    const params = useParams()
    const [article, setArticle] = useState< Article | null>(null)
        
    useEffect(() => {
        fetch(`http://localhost:4000/article/${params.id}`)
        .then(res => res.json())
        .then(data => setArticle(data))
    }, [params.id])

    return (
            <>
            {
                article?
                <SingleArticleComp article={article}/>
                : <h1>Article not found</h1>
            }
            </>
    )
}