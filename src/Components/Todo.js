import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
export default function Todo(props) {
  
  const[isEdit,setEdit] = useState(false)

  const[Title,setTitle] = useState(props.todo.title);
  const[des,setDes] = useState(props.todo.des);

  let submit=(e)=>{
    e.preventDefault()
    props.onEdit(props.todo,Title,des);

    setEdit(false);
}

  return (
    <>
    {/* using isEdit to toggle btween edit mode and normal todo card mode  */}
    {isEdit?<>
    
    {/* For Edit todo card  */}
    <div className='p-2'>
      <div className="todo-card animate__animated  animate__fadeInDownBig  " id={"todo"+props.todo.s} >
        <form onSubmit={submit}>
        <span className="title"> {props.todo.status==="complete"?"✅":"🎯"} 
        {/* edit title input   */}
       
        <input type="text" value={Title} onChange={(e)=>{setTitle(e.target.value)}} style={{width:"90%"}}/>
        </span>
        <p className="description">
       

        {/* edit discription input */}
        <textarea required  value={des} onChange={(e)=>{setDes(e.target.value)}}  />
        </p>
        <div className="actions">
          <button className="pref" onClick={()=>{ isEdit?setEdit(false):setEdit(true); }}>
            Edit
          </button>
         
          
          <div>

              <button className="accept bg-white delete me-1" style={{color:"red"}} onClick={()=>{
                let myId="todo"+props.todo.s;

                
                if((document.getElementById(myId).classList.contains="animate__fadeInDownBig")){
                  document.getElementById(myId).classList.remove("animate__fadeInDownBig");
                  document.getElementById(myId).classList.add("animate__hinge");
                }

                setTimeout(() => {
                  props.onDelete()
                }, 1800);
              }}>
                DELETE 
              </button>

              <button type='submit' className="accept bg-success" >
                SAVE 
              </button>     

              </div>     
        
          
        </div>
        </form>
      </div>
    </div>

    </>:<>
    {/* For Normal todo card  */}
    
    <div className='p-2'>
      <div className="todo-card animate__animated  animate__fadeInDownBig" id={"todo"+props.todo.s} /* style={props.todo.status==="pending"?{background:"lightcoral"}:{background:"lightgreen"}} */>
        <span className="title overflow-auto "> {props.todo.status==="complete"?"✅":"🎯"} {props.todo.title}</span>
        <p className="description overflow-auto">
        {props.todo.des}
        </p>
       
         
          {/* Toggle btn for Remove or Done  */}
          { props.todo.status==="pending" ? <>
          <div className="actions">
          <div className='Edit-btn'>
            <button className="pref" onClick={()=>{ isEdit?setEdit(false):setEdit(true); }}>
              Edit
            </button>
          </div>
          <div className='Pending-btns d-flex align-items-center justify-content-end'>
              <button className="accept bg-white delete me-1" style={{color:"red"}} onClick={()=>{
                let myId="todo"+props.todo.s;
                if((document.getElementById(myId).classList.contains="animate__fadeInDownBig")){
                  document.getElementById(myId).classList.remove("animate__fadeInDownBig");
                  document.getElementById(myId).classList.add("animate__hinge");
                }
                setTimeout(() => {
                  props.onDelete()
                }, 1800);
              }}>
                DELETE 
              </button>
              <button className="accept bg-success" onClick={()=>{
                let myId="todo"+props.todo.s;
                if((document.getElementById(myId).classList.contains="animate__fadeInDownBig")){
                  document.getElementById(myId).classList.remove("animate__fadeInDownBig");
                  document.getElementById(myId).classList.add("animate__flipOutX");
                }
                setTimeout(() => {
                  props.onComplete()
                }, 500);
              }}>
                DONE <FontAwesomeIcon icon="fa-solid fa-check" size="lg" style={{color: "#46fe39",}} />
              </button>     
          </div>     
          </div>
          </>:<> 
          <div className="actions justify-content-end">
              <button className="accept bg-white delete" style={{color:"red"}} onClick={()=>{
                let myId="todo"+props.todo.s;
                if((document.getElementById(myId).classList.contains="animate__fadeInDownBig")){
                  document.getElementById(myId).classList.remove("animate__fadeInDownBig");
                  document.getElementById(myId).classList.add("animate__hinge");
                }
                setTimeout(() => {
                  props.onDelete()
                }, 1800);
              }}>
                DELETE 
              </button>
            </div>
          </>}
          
        
      </div>
    </div>

    </>}
    </>
  )
}
