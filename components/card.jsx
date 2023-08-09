"use client";
import '@styles/globals.css'
import { useState } from 'react'
function Card( {children, vocab, word, start} ) {
  const [state, setState] = useState(start);
  const flipCard = () => {
    setState(state === "front" ? "back" : "front");
  }
  if(state == "front"){
    return (
      <div>
        <div className='grid justify-normal'>
            <div className="w-fit h-fit border-4 border-black p-[45px] bg-indigo-500">
                <h1 className='text-center text-4xl w-[600px] h-[150px] border-8 border-red-300' > {word} </h1>
                <h2 className='text-center text-xl border-8 border-red-500'> Frontside: {children} </h2>
                <button onClick={flipCard} className='border-8 border-black'> Button </button>
            </div>
                  
        </div>
      </div>
    )
  }
  else{
    return (
      <div>
        <div className='grid justify-center'>
            <div className="w-fit h-fit border-4 border-black p-[45px] bg-indigo-500">
                <h1 className='text-center text-4xl w-[600px] h-[150px] border-8 border-red-300' > {vocab} </h1>
                <h2 className='text-center text-xl border-8 border-red-500'> Backside: {children} </h2>
                <button onClick={flipCard} className='border-8 border-black'> Button </button>
            </div>      
        </div>
      </div>
    )
  }
}

export default Card