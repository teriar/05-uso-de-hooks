import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWhithCustomHooks } from './01-useState/CounterWhithCustomHooks'
import './index.css'
// import { SimpleForm } from './02-useEfect/SimpleForm'
// import { FormWithCUstoomHook } from './02-useEfect/formWithCustomHook'
// import { MultipleCUstomHooks } from './03-examples/MultipleCUstomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayouEfect/Laytout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
import {CallbackHook} from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-usecontext/MainApp'
import {BrowserRouter} from 'react-router-dom'
// import './08-useReducer/intro-reducer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   {/* <React.StrictMode> */}
  <MainApp/>
   {/* </React.StrictMode> */}
  </BrowserRouter>
)
