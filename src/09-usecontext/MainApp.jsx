import { Routes,Route, Navigate, Link } from "react-router-dom"
import {HomePage} from './HomePage'
import {LoginPage} from './LoginPage'
import {AboutPage} from './AboutPage'
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"



export const MainApp = () => {
  return (
   <UserProvider>
   {/* <h1>MainApp</h1> */}
   {/* <Link to="/">Home</Link>
   <Link to="/about">about</Link>
   <Link to="/login">login</Link> */}
   <Navbar/>
   
   <hr />
   <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="login" element={<LoginPage/>}/>
     <Route path="about" element={<AboutPage/>}/>
     
     
     {/* <Route path="/*" element={<LoginPage/>}/> */}
     <Route  path="/*" element={<Navigate to="/about"/>}/>
   </Routes>
   </UserProvider>
  )
}
