import { useRef } from "react"


export const FocusScreen = () => {
 
 const inputRef = useRef()
 console.log(inputRef);
 
 const onCLick =()=>{
   inputRef.current.select();
 }  
 
 
 
    return (
    <>
    <h1>FocusScreen</h1>
     <hr />

     <input 
     ref={inputRef}
     type="text"
     placeholder="Ingrese su nombre" 
     className="form-control"/>


    <button 
    className="btn btn-primary mt-2"
    onClick={onCLick}>
      Set Focus
    </button>
     
    </>

  )
}
