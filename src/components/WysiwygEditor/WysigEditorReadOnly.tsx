import { ContentState, convertFromRaw, convertToRaw } from "draft-js";
import { useEffect, useState } from "react";
import {EditorState} from 'draft-js';
import { Editor,  } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type Props={
    contentState:any
    editable?: boolean
    setContentState?: Function
}
export default function WysiwygEditorReadOnly({ setContentState, contentState, editable }:Props){
    return(
        <>
            <Editor
                readOnly={!editable}
                toolbarHidden={!editable}
                contentState={contentState}
                onContentStateChange={(event)=>{
                    // @ts-ignore
                    setContentState(event)
                }}
            />
        </>
    )
}