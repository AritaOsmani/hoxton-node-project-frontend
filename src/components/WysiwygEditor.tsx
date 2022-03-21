import React, { useEffect, Component, useState } from "react";
import {convertToRaw,convertFromRaw, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

type Props ={
    setEditorContent : Function
}
const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

export default function EditorConvertToJSONHook({setEditorContent}:Props){
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),

      );

      return (
        <Editor
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        //@ts-ignore
        onContentStateChange={(event)=>{
            console.log("Event:",event)
            
            setEditorContent(convertFromRaw(event))
            console.log("JSON:",convertFromRaw(event))

            console.log("HTML:",draftToHtml(event))
        }}
        
      />
      )
}

