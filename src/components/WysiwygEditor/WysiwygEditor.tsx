import { useState } from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


export default function WysiwygEditor(){
        const [editorState, setEditorState] = useState(() => 
            EditorState.createEmpty(),
        )
            
        const [stateWithContent, setStateWithContent] = useState()
        return(
        <>
            <Editor
                editorState={editorState}
                onEditorStateChange={()=>{
                    console.log(editorState.getCurrentContent());
                }}
            />
            {/* <Editor
                editorState={stateWithContent}
            /> */}
        </>
    )
}