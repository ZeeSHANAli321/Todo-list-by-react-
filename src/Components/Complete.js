import React from 'react'
import Todo from './Todo';
import { Link } from 'react-router-dom';
export default function Complete(props) {
  return (
    <div className="container  text-dark my-3 p-3 " >
      <p className="text-center navContainer ">
      
      <small className="mx-2 todoPage" >
        <Link to="/">Todo's</Link>
      </small>
      <small className="mx-2 completePage activePage" >
        <Link to="/completed" style={{color:"green"}} >Completed</Link>
      </small>
      <small className="mx-2 allPage " >
        <Link to="/all"  >All</Link>
      </small>
    </p>

    <hr />
      {!(props.todo.some(obj => obj.status === 'complete')) ? (
        <h1 className="text-center display-1 lead noTodo">No Todos to display ! </h1>
      ) : (
        <div className="todoContainer">
          {props.todo.map((todo) => {
            if (todo.status === "complete") {
              return (
                <Todo
                  todo={todo}
                  key={todo.s}
                  onDelete={() => {
                    props.onDelete(todo);
                  }}
                />
              );
            } else {
              return false;
            }

          })}
        </div>
      )}
    </div>
  )
}
