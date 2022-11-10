import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({quote, author}) => {

  const pRef = useRef()
   
const [boxZise, setboxZise] = useState({widht:0, height:0})


 useLayoutEffect(() => {
   const {height, width} =(pRef.current.getBoundingClientRect())
     setboxZise({height, width})
 
 }, [quote])


  return (
    <>
    <blockquote className="blockquote text-end"
    style={{display:"flex"}}>
     <p ref={pRef} className="mb-1">{quote}</p>
     <footer className="blockquote-footer">{author}</footer>
     </blockquote>
     
     <code>{JSON.stringify(boxZise)}</code>
      </>
  )
}
