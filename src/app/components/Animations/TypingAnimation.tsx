'use client'
import { useEffect, useState,useRef } from "react";
import "./index.css"
import { CursorAni } from "../CursorAni";
import { animationConfigs } from "@/app/constants";

function TypingAnimation(props){
const [strings,setSting] = useState(props?.strings?props.strings:[]);
const [currentIndex,setCurrentIndex] = useState(0);
const [text,setText] = useState('')
const [id,setId] = useState(props.id);
const didMount = useRef(false);

useEffect(()=>{
    setText(()=>'');
    typing(0);
},[currentIndex]);

useEffect(()=>{ 
    if(didMount.current === false)
        didMount.current = true;
    else
    setTimeout(()=>setCurrentIndex(currentIndex === (strings.length - 1)? 0:currentIndex+1),animationConfigs.waitTime)
},[props.toggle])

const typing = (index:number)=>{
    let str = strings[currentIndex]
  
    if(index === str.length){
      props.isCompleted(id);
    }else 
    setTimeout(()=>{
        setText((txt)=> txt + str.charAt(index));
        typing(index+1);
    },animationConfigs.speed);

}

   return <div className="text">{text} <CursorAni/></div> 

}

export default TypingAnimation;