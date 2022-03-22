import { useEffect, useState } from "react";
import NewArticleForm from "../components/NewArticleForm/NewArticleForm";
import WysiwygEditorReadOnly from "../components/WysiwygEditor/WysigEditorReadOnly";
import WysiwygEditor from "../components/WysiwygEditor/WysiwygEditor";
import { User } from "../Types";

type Props ={
    user: User | null
}

export default function NewArticlePage ({user}:Props){

    function createArticle(data:Object){
        fetch('http://localhost:4000/article',{
            method:"POST",
            headers:{
                Authorization: localStorage.token,
                "Content-Type":"application/json"
            },
            
            body:JSON.stringify(data)
        }).then(resp => resp.json()).then(result => console.log(result))
    }
    if(!user) return <h1>You have to login first</h1>

    return(
        <>
            <h1>Create new Article</h1>
            <NewArticleForm  createArticle={createArticle}/> 
        </>
    )
}


// This is to display the content

// const [contentState, setContentState]= useState()
// <WysiwygEditorReadOnly contentState={contentState} />