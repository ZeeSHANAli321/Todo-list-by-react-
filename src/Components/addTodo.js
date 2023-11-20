import React, { useState } from 'react';

export default function AddTodo({addTodo,showForm,setShowForm}) {

    const[title,setTitle] = useState("");
    const[disc,setDisc] = useState("");
    
    let submit=(e)=>{
        e.preventDefault()
        addTodo(title,disc);
        setDisc("");
        setTitle("");
        setShowForm(false);
    }
  

    return (
        <div className="container formContainer   p-3 " style={showForm?{marginTop:"0px",transition:"all .8s ease-in-out"}:{marginTop:"-300px",transition:"all .8s ease-in-out"}} >
         
                <form onSubmit={submit}>
                
                <div className="mb-3">
                    <label htmlFor="todoTitle" className="form-label">Title </label>
                    <input required type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="todoTitle" />
                       
                </div>

                <div className="mb-3">
                    <label htmlFor="todoDisc" className="form-label">Description</label>
                    <input required type="text" value={disc} onChange={(e)=>{setDisc(e.target.value)}} className="form-control" id="todoDisc"/>
                </div>
              
                <button type="submit" className="btn btn-success" >Add Todo</button>
            </form>
        </div>
    )
}
