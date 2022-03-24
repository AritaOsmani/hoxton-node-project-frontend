import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NewArticleForm from "../components/Forms/NewArticleForm";
import UpdateArticleForm from "../components/Forms/UpateArticleForm";
import { Article, User } from "../Types";

type Props ={
    user: User | null
}

export default function UpdateArticlePage ({user}:Props){

    const[article, setArticle] = useState<Article>()


    const navigate = useNavigate()
    const params = useParams()

    useEffect(()=>{
        fetch(`http://localhost:4000/article/${params.id}`)
        .then(resp => resp.json())
        .then(data => setArticle(data))
    },[params.id])

    function updateArticle(data:Object){
        fetch(`http://localhost:4000/article/${params.id}`,{
            method:"PATCH",
            headers:{
                Authorization: localStorage.token,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(resp => resp.json()).then(result => navigate(`/article/${result.id}`))
    }
    if(!user) return <h1>You have to login first</h1>
    if(!article) return <h1>Article not found</h1>
    return(
        <div className="update-article-page">
            <h1>Update Article</h1>
            <UpdateArticleForm article={article} updateArticle={updateArticle} />
        </div>
    )
}

