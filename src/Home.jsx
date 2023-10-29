import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Home(){
    const [studentList,setStudentList] = useState([])
    useEffect(()=>{
        axios.get ('http://localhost:3100/studentGet')
        .then((res)=>setStudentList(res.data.records))
        .catch(err=> console.log(err));
    },[studentList])

    
    const handledelete=(id)=>{
        axios.delete('http://localhost:3100/delete/'+id)
            .then(res=>{
                Location.reload();
            })
            .catch(err=>console.log(err));

 }
return(
    <div className="student" >
    <div>paticipant</div>
       
<table >
    <thead>
        <tr>
           <th>FirstName</th>
           <th>LastName</th>
           <th>Id</th>
           <th>E-Mail</th>
           <th>PhoneNumber</th>
           <th>Year</th>
           <th>College</th>
           <th>Action</th>

        </tr>
    </thead>
    <tbody>
        {  
        studentList.map((student)=>{
            return <tr key={student.id}>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.id}</td>
                <td>{student.email}</td>
                <td>{student.phonenumber}</td>
                <td>{student.year}</td>
                <td>{student.college}</td>
                <td>
                    <Link to={`/Edit/${student.id}`} >Edit</Link>
                    <button onClick={()=>handledelete(student.id)}>Delete</button>
                </td>
                
            </tr>
})
           
          
    }
    </tbody>
</table>

<nav>
    <Link to="/">Home</Link>
</nav>
    </div>
)

    
}


export default Home
