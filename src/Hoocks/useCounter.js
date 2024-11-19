import { useState } from "react"

export const useCounter = (initialValue = 0) => {

    const [counter, setcounter] = useState(initialValue);

    const increment = (val =1)=>{
        setcounter(counter + val)
    }
    const reset = ()=>{
        setcounter(initialValue)

    }
    const decrement = (val = 1, allowNegative=true)=>{
        if(!allowNegative && counter < 1)return
        setcounter(counter - val)

    }
    return {
        counter,
        increment,
        reset,
        decrement
    }
}
