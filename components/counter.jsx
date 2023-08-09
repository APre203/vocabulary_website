"use client";
import '@styles/globals.css'
import { useState } from 'react';




const Counter = ({color}) => {
    const [state, setState] = useState(0);

    const next_word = () => {
        setState(state + 1)
        // GO TO NEXT WORD
    }

    if(color == "red"){
        return (
            <button onClick={next_word} className='transition-all flex justify-center place-items-center rounded-full bg-red-400 w-24 h-24 text-3xl font-bold hover:bg-red-300'>{state}</button>
        )
    }
    else{
        return (
            <button onClick={next_word} className='transition-all flex justify-center place-items-center rounded-full bg-green-400 w-24 h-24 text-3xl font-bold hover:bg-green-300'>{state}</button>
        )
    }
    
}

export default Counter