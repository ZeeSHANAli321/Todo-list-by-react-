import React from 'react'
import Todo from './Todo';
import { Link } from 'react-router-dom';
export default function all(props) {
  return (
    <div className="container  text-dark my-3 p-3 " >
      <p className="text-center navContainer ">
      
      <small className="mx-2 todoPage" >
        <Link to="/">Todo's</Link>
      </small>
      <small className="mx-2 completePage" >
        <Link to="/completed">Completed</Link>
      </small>
      <small className="mx-2 allPage activePage" >
        <Link to="/all" style={{color:"green"}} >All</Link>
      </small>
    </p>

    <hr />
      {props.todo.length === 0 ? (
        <h1 className="text-center display-1 lead noTodo ">No Todos to display ! </h1>
      ) : (
        <div className="todoContainer">
          {props.todo.map((todo) => {

            return (
              <Todo
                todo={todo}
                key={todo.s}
                onDelete={() => {
                  props.onDelete(todo);
                }}
                onEdit={
                  props.onEdit
                }
                onComplete={() => {
                  props.onComplete(todo);
                }}
              />
            );


          })}
        </div>
      )}
    </div>
  )
}
