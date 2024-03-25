'use client'

import { useRef, useEffect, useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener";

export default function VlogPlayer({vdosrc,isPlaying}:{vdosrc:string,isPlaying:boolean}){

    const vdoRef = useRef<HTMLVideoElement>(null);

    useEffect(()=>{
        if(isPlaying){
            vdoRef.current?.play()
        }
        else{
            vdoRef.current?.pause()
        }
    },[isPlaying])

    useWindowListener("resize",(e)=>{ alert('Window Width is ' + (e.target as Window).innerWidth)})

    /*const [winwidth, setWinWidth] = useState(0)
    useEffect(()=>{
        const handleWindWidthChange = () =>{
            setWinWidth(window.innerWidth)
            alert('window width = '+window.innerWidth)
        }

        window.addEventListener("resize", handleWindWidthChange)

        return ()=>{
            window.removeEventListener("resize", handleWindWidthChange)
        }
    },[])*/

    return (
        <video className="w-[40%]" src={vdosrc} ref={vdoRef} controls loop muted />
    )
}