import React, { useState } from 'react'
import AddTodo from "./addTodo";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function TopBar(props) {
  const [showForm,setShowForm] = useState(false);

  const [darkTheme,setDarkTheme] = useState(()=>{
    if(localStorage.getItem("theme")==="dark"){
      return true;
    }
    else{
      return false;
    }
  });
  let budy = document.querySelector("body");
 /*  if(localStorage.getItem("theme")==="dark"){
    setDarkTheme(true)
  }else{
    setDarkTheme(false)
  } */
  if(darkTheme){
    budy.setAttribute("data-theme","dark");
    localStorage.setItem("theme","dark");
  }else{
    localStorage.setItem("theme","light");
    budy.setAttribute("data-theme","light");
  }
  function toggleTheme(){
    console.log("theme-toggled ")
    darkTheme?setDarkTheme(false):setDarkTheme(true);
       /*  if(darkTheme){setDarkTheme(false); budy.setAttribute("data-theme","light");}
        else{setDarkTheme(true);budy.setAttribute("data-theme","light");} */
  }

  return (
    <>
      <div className="container mt-3 ">
        <div className="row my-md-4">
          <div className="col-md-6 mx-auto p-3 px-4 d-flex justify-content-between align-items-center " style={{border:"2px solid white",borderRadius:"40px",boxShadow:"0 0 1 1 black",background:"var(--tob-bar-bg)"}} >
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 d-flex justify-content-between align-items-center">
                   <h5 className='my-auto mainFont'><FontAwesomeIcon icon="fa-solid fa-list" size='sm' /> Todo List</h5>
                   <div className='d-flex '>
                    <div className='themeBtn me-3 ' onClick={()=>{toggleTheme()}} style={{cursor:"pointer"}}>{darkTheme?"🌞":"🌙"}</div>
                   <div className="addBtn " onClick={()=>{showForm?setShowForm(false):setShowForm(true);}}  title='Add new Todo' style={{transition:"all .5s ease-in-out",color:showForm?"red":"black",rotate:showForm?"45deg":"0deg",cursor:"pointer"}}><FontAwesomeIcon icon="fa-solid fa-plus" size="lg" style={{color:"var(--c-icon)"}} /></div>
                   </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12" style={{transition:"all ease-in-out",overflow:"hidden"}}>
                
              <AddTodo addTodo={props.addTodo} showForm={showForm} setShowForm={setShowForm} />
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
