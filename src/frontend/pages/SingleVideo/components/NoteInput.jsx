import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../../../context"
const NoteInput = ({formInput, setFormInput, submitFormHandler ,isediting, setIsEditing }) =>{
    useState()
 const {auth:{token}} = useAuth()
const navigate =useNavigate()
   return (
               <>
              <form className="notes_form">
              <input
                type="text"
                placeholder="Add Title"
                className="notes_title"
                value={formInput.title}
                onChange={(e)=>setFormInput({...formInput,title:e.target.value})}
              ></input>
              <textarea placeholder="Desp" className="notes_desp" value={formInput.description} onChange={(e)=>setFormInput({...formInput,description:e.target.value})}></textarea>
              <div className="notes_btns">
                <button onClick={(e)=>{
                token?null:navigate("/login")
                submitFormHandler(e)}
                }>Submit</button>
                <button onClick={(e)=>{
                     e.preventDefault()
                    isediting?setIsEditing(false):null,
                setFormInput({title:"",description:""})}}>Discard</button>
              </div>
              </form >
             
       </>
    )
   
}
export {NoteInput}