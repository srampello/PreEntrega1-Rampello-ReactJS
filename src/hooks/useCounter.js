import { useState } from "react"

export const useCounter = (min, max) => {
    const[counter,setCounter] = useState(min)
    //custom hook

    const handleSumar = () => {
        if(counter < max){
            setCounter(counter+1)
        }
    }

    const handleRestar = () => {
        if(counter > min) {
            setCounter(counter-1)    
        }
    }

    return{counter, handleRestar, handleSumar}
}