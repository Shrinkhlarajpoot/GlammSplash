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
                <button 
                disabled={token?false:true}
                onClick={(e)=>{
                token?null:navigate("/login")
                submitFormHandler(e)}
                } className={`${token?"":"btn-notallowed"}`}>Submit</button>
                <button
                disabled={token?false:true}
                 onClick={(e)=>{
                     e.preventDefault()
                    isediting?setIsEditing(false):null,
                setFormInput({title:"",description:""})}} className={` ${token?"":"btn-notallowed"}`} >Discard</button>
              </div>
              </form >
             
       </>
    )
   
}
export {NoteInput}