import { useState } from "react";
import WysiwygEditorReadOnly from "../components/WysiwygEditor/WysigEditorReadOnly";
import WysiwygEditor from "../components/WysiwygEditor/WysiwygEditor";

export default function NewArticlePage (){

    const [contentState, setContentState]= useState()
    
    return(
        <> 
            <WysiwygEditorReadOnly contentState={contentState} />
            <WysiwygEditor setContentState={setContentState}/>
        </>
    )
}