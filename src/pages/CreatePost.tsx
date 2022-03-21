import { convertToRaw, convertFromRaw, EditorState, Editor } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useState } from "react";
import EditorConvertToJSONHook from "../components/WysiwygEditor";
import { User } from "../Types";

type Props={
    user: User | null
}

export default function CreatePost({user}:Props){
    
    const [editorContent, setEditorContent] = useState()
    const [newEditorContent, setNewEditorContent] = useState()
    const [editorState, setEditorState] = useState()
    function createArticle(){
        let data =JSON.stringify({
            title: "Test",
            image: "https://www.pexels.com/photo/brown-and-black-wooden-chairs-inside-room-207691/",
            intro: "Lorem Ipsum",
            userId: 2,
            content: JSON.stringify(editorContent),
            categories:"Business",
        })
        console.log(data)
        fetch('http://localhost:4000/article',{
            method:"POST",
            headers: {
                authorization: localStorage.token,
                "Content-Type" : "application/json"
            },
            body:data
        }).then(resp => resp.json()).then(result =>{
              
        })
    }
    return(
      <>
        <h1>Editor Content:</h1>
        <div className="editorcontent">
           {/* <Editor editorState={editorState} onChange={setEditorState}  /> */}
        </div>

        <EditorConvertToJSONHook setEditorContent={setEditorContent}/>
        <button 
            onClick={createArticle}
        >Create Test </button>
      </>
  )  
}