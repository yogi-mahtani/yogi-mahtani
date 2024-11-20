'use client';
import { useEffect, useState,useRef } from 'react';
import './index.css';
import { CursorAni } from '../CursorAni';
import { animationConfigs } from '@/app/constants';

interface TypingAnimationProps{
    strings: string[],
    toggle: boolean,
    id: number,
    isCompleted: ()=>void
} 

function TypingAnimation(props:TypingAnimationProps){
const [strings] = useState(props?.strings?props.strings:[]);
const [currentIndex,setCurrentIndex] = useState(0);
const [text,setText] = useState('');
const didMount = useRef(false);

useEffect(()=>{
    setText(()=>'');
    typing(0);
},[currentIndex]);

useEffect(()=>{ 
    if(didMount.current === false)
        didMount.current = true;
    else
    setTimeout(()=>setCurrentIndex(currentIndex === (strings.length - 1)? 0:currentIndex+1),animationConfigs.waitTime);
},[props.toggle]);

const typing = (index:number)=>{
    const str = strings[currentIndex];
  
    if(index === str.length){
      props.isCompleted();
    }else 
    setTimeout(()=>{
        setText((txt)=> txt + str.charAt(index));
        typing(index+1);
    },animationConfigs.speed);

};

   return <div className="text-container"> <span className='text'> {text} </span> <CursorAni/></div>; 

}

export default TypingAnimation;