import { useState, useEffect } from "react"

export function useWindowListener(eventType:string,listener:EventListener){
    //const [winwidth, setWinWidth] = useState(0)
    useEffect(()=>{
        /*const handleWindWidthChange = () =>{
            setWinWidth(window.innerWidth)
            alert('window width = '+window.innerWidth)
        }*/

        //window.addEventListener("resize", handleWindWidthChange)
        window.addEventListener(eventType, listener)

        return ()=>{
            window.removeEventListener(eventType, listener)
        }
    },[])
}