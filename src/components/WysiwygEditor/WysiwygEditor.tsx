import { ContentState, convertFromRaw, convertToRaw } from "draft-js";
import { useEffect, useState } from "react";
import {EditorState} from 'draft-js';
import { Editor,  } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type Props={
    setContentState:Function
}

export default function WysiwygEditor({setContentState}:Props){
        const [editorState, setEditorState] = useState(EditorState.createEmpty())
        return(
        <>
            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                onContentStateChange={(event)=>{
                    setContentState(event)
                }}

            />
        </>
    )
}