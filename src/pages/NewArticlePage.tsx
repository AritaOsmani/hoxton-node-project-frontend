import { useNavigate } from "react-router-dom";
import NewArticleForm from "../components/Forms/NewArticleForm";
import { User } from "../Types";

type Props ={
    user: User | null
}

export default function NewArticlePage ({user}:Props){
    const navigate = useNavigate()

    function createArticle(data:Object){
        fetch('http://localhost:4000/article',{
            method:"POST",
            headers:{
                Authorization: localStorage.token,
                "Content-Type":"application/json"
            },
            
            body:JSON.stringify(data)
        }).then(resp => resp.json()).then(result => navigate(`/article/${result.id}`))
    }
    if(!user) return <h1>You have to login first</h1>

    return(
        <div className="create-article-page">
            <h1>Create new Article</h1>
            <NewArticleForm  createArticle={createArticle}/> 
        </div>        
    )
}


// This is to display the content

// const [contentState, setContentState]= useState()
// <WysiwygEditorReadOnly contentState={contentState} />