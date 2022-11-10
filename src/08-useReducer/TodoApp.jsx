
import { useTodos } from "../hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import {TodoList } from "./TodoList"


const initialSate=[
    // {
    //  id:new Date().getTime(),
    //  description: 'Recolectar la piedra del alma',
    //  done:false

    // },
    
]


export const TodoApp = () => {

  const {todos,todosCount,pendingTodosCount,handleNewTodo,handleDeleteTodo,handleToggleTodo}= useTodos();


  return (
    <>
      <h1>Todo: {todosCount} <small>pendientes: {pendingTodosCount} </small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
            {/* todo list */}
      <ul className="list-group">
        
        { todos.map(todo =>( 

           <TodoList
           key={todo.id}
           todo={todo} 
           onDeleteTodo={handleDeleteTodo}
           onToggleTodo={handleToggleTodo}/>
                ))
        
         }
      </ul>
      {/* fin todolist */}
        </div>
        <div className="col-5">
            <h4>Agregadr Todo</h4>
            <hr />
            {/* todoadd */}
            <TodoAdd
            onNewTodo={handleNewTodo}/>
            {/* fin todoApp */}
        </div>
      </div>

    </>
  )
}
