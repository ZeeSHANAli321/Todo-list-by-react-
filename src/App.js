import "./App.css";

import TopBar from "./Components/TopBar";

import Todos from "./Components/Todos";
import Complete from "./Components/Complete";
import All from "./Components/Alll" ;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }

  const onComplete = (t) => {
   
    /* setTodo(
      todo.filter((e) => {
        return e !== t;
      })
    ); */
    t.status="complete";
    setTodo([...todo]);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const onDelete = (t) => {
   
    setTodo(
      todo.filter((e) => {
        return e !== t;
      })
    );
    
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const addTodo = (title, disc) => {
    let sno = todo.length === 0 ? 1 : todo[todo.length - 1].s + 1;
    const newTodo = {
      s: sno,
      title: title,
      des: disc,
      status:"pending"
    };
  
    setTodo([...todo, newTodo]);
  };

  const onEdit = (t,title, des) => {

    t.title = title;
    t.des = des;

    setTodo([...todo]);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const [todo, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={
          <>
           <TopBar addTodo={addTodo}/>
           
           <Todos todo={todo} onComplete={onComplete} onDelete={onDelete} onEdit={onEdit} />
          </>
          } />
          
          <Route path="/Completed" element={
          <>
           <TopBar addTodo={addTodo}/>
           
           <Complete todo={todo} onDelete={onDelete} onEdit={onEdit} />
          </>
          } />
          
          <Route path="/all" element={
          <>
           <TopBar addTodo={addTodo}/>
           
           <All todo={todo}  onDelete={onDelete} onComplete={onComplete}  onEdit={onEdit} />
          </>
          } />
          
          
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
