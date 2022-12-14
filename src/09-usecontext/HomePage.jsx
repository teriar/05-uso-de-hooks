import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {
 const {user, setUser} = useContext(UserContext)
 
 
  return (
    <>
    <h1>HomePage <small>{user?.name}</small></h1>
    <hr />
    <pre>
      {JSON.stringify(user, null, 3 )}
    </pre>

    <button
    onClick={()=>setUser({id:123, name:'juan', email:'Juan@gmail.com'})} 
    className='btn btn-primary'>
      Establecer Usuario
    </button>
    </>
  )
}
