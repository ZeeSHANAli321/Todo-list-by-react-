import React from "react";
import Todo from "./Todo";
import { Link } from 'react-router-dom'
/* import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 *//* import { Link } from 'react-router-dom' */
export default function Todos(props) {
  const mystyle = {
    background: "inherit",
  };

  return (

    <div className="container  text-dark my-3 p-3 " style={mystyle}>
      <div className="container  text-dark my-1 p-1 ">
        <p className="text-center navContainer ">

          <small className="mx-2 todoPage activePage " >
            <Link to="/" style={{color:"green"}} >Todo's</Link>
          </small>
          <small className="mx-2 completePage" >
            <Link to="/completed">Completed</Link>
          </small>
          <small className="mx-2 allPage" >
            <Link to="/all">All</Link>
          </small>
        </p>

        <hr />

      </div>



      {!(props.todo.some(obj => obj.status === 'pending'))? (
        <h1 className="text-center display-1 lead noTodo ">No Todos to display ! </h1>
      ) : (
        <div className="todoContainer">
          {props.todo.map((todo) => {
            if (todo.status === "pending") {
              return (
                <Todo
                  todo={todo}
                  key={todo.s}
                  onComplete={() => {
                    props.onComplete(todo);
                  }}
                  onDelete={() => {
                    props.onDelete(todo);
                  }}
                  onEdit={
                    props.onEdit
                  }
                />
              );
            } else {
              return false;
            }

          })}
        </div>
      )}

    </div>
  );
}
