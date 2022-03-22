import { ContentState, convertFromRaw, convertToRaw } from "draft-js";
import { useEffect, useState } from "react";
import {EditorState} from 'draft-js';
import { Editor,  } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type Props={
    contentState:any
}
export default function WysiwygEditorReadOnly({contentState}:Props){
        return(
        <>
            <Editor
                readOnly
                toolbarHidden
                contentState={contentState}
            />
        </>
    )
}