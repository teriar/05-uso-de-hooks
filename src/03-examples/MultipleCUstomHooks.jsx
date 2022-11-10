import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote, Quote } from "./";



export const MultipleCUstomHooks = () => {
 

  const {counter, increment} = useCounter(1);

    const {data,isLoading,hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
 
//    console.log(data,isLoading,hasError)

//  if(isLoading){
    
//     return (
//         <h1>Loading...</h1>
//     )
//  }
  
       const {author,quote} = !!data && data[0]
    
 
    return (
        <>
    <h1>BreakinBag quotes</h1>
     <hr />
     {
        (isLoading)
        ?  <LoadingQuote/>
     : <Quote
       quote={quote}
       author={author}
     />
     }

       <button 
       className="btn btn-primary"
       onClick={()=>increment()}
       disabled={isLoading}
       >Next quote</button>

     
     

        </>
  )
}
