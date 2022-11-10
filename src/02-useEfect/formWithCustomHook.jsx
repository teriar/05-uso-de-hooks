import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCUstoomHook = () => {

   
    
   const {formState,onResetForm, onInputChange,username,email,password} =useForm({    
      username:'',
      email:'',
      password:''
   })


  //  const {username,email,password} = formState

    return (
    <>
    <h1>Formulario con customHook</h1>
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


<input 
    type="password"
    className="form-control mt-2"
    placeholder="contraseña"
    name="password"
    value={password}
    onChange={onInputChange}
    />
    
    
    <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
    </>
  )
}
