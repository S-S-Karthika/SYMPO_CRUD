
import React,{useState} from 'react'
import axios from 'axios'

//  import { useNavigate } from "react-router-dom"
import "./app.css"
import { Link } from 'react-router-dom'
// import Home from './Home'


const Crud=()=>{
  const [newUser,setNewUser]=useState({
    firstname:"",
    lastname:"",
    id:null,
    email:"",
    phonenumber:null,
    year:null,
    college:""
  })

  
// const navigate = useNavigate()
const handlechanger=(e)=>{
    setNewUser((prev)=>({...prev,[e.target.name]:e.target.value}))
}


const handleClick = async e=>{

  e.preventDefault()
  try{
      await axios.post("http://localhost:3100/create",newUser)
      // navigate("/")
  }
  catch(err){
   console.error(err)
  }

}


  return (
    <header>
       <nav>
      <Link to="/Home">List of Participent</Link>
      </nav>
     <div className="information">
        <lable>FirstName</lable>
        <input type="text" name="firstname" onChange={handlechanger}/>
        <lable>LastName</lable>
        <input type="text" name="lastname" onChange={handlechanger}/>
        <lable>Id Number</lable>
        <input type="number" name="id" onChange={handlechanger}/>
        <lable>E-mail</lable>
        <input type="text" name="email" onChange={handlechanger}/>
        <lable>Phone Number</lable>
        <input type="number" name="phonenumber" onChange={handlechanger}/>
        <lable>Current Year</lable>
        <input type="number" name="year" onChange={handlechanger}/>
        <lable>College/Institution</lable>
        <input type="text" name="college" onChange={handlechanger}/>
        <br/>
      <button  onClick={handleClick}>submit</button>
      <br/>
    
     </div>
     <br/>
    
    </header>
  )
}


export default Crud;