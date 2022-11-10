import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formstate, setformstate] = useState({
        username:'darkrising',
        email:'felipegonzalezurr@gmail.com'
    })


    const{username,email} = formstate;


    const onInputChange=({target})=>{
        
        const {name,value} = target

        setformstate({
            ...formstate,
            [name]: value
        })

    }

  // useEffect(()=>{
  //   console.log('Usefect called!')
  // },[]);
    

  // useEffect(()=>{
  //   console.log('Usefect called formsate!')
  // },[formstate]);
    
  // useEffect(()=>{
  //   console.log('email change!')
  // },[email]);





    return (
    <>
    <h1>Formulario Simple</h1>
    <hr />


    <input 
    type="text"
    className="form-control"
    placeholder="useName"
    name="username"
    value={username}
    onChange={onInputChange}
    />
    
    <input 
    type="email"
    className="form-control mt-2"
    placeholder="felipegonzalezurr@gmail.com"
    name="email"
    value={email}
    onChange={onInputChange}
    />
    
    {
      (username=="darkrising2") && <Message/>
    }
    
    
    </>
  )
}
