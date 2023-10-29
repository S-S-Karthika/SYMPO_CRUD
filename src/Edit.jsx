import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function Edit() {

    const{id}=useParams();
    const navigate = useNavigate()

    const [values,setValues]=useState({
        firstname:'',
        lastname:'',
        id:'',
        email:'',
        phonenumber:'',
        year:'',
        college:''
    })


    // useEffect(()=>{
    //     axios.get ('http://localhost:3100/studentGet/')
    //     .then(res=>{
    //         console.log(res)
    //         setValues({...values,firstname:res.data[0].firstname,lastname:res.data[0].lastname,id:res.data[0].id,
    //             email:res.data[0].email,phonenumber:res.data[0].phonenumber,year:res.data[0].year,college:res.data[0].college
    //         })
    //     })

    // },[id,values])

   const location = useLocation()
   console.log(location.pathname.split("/")[2])
   const sid=location.pathname.split("/")[2]

    

   const handleUpdate =(event)=>{
    event.preventDefault();

    axios.put(`http://localhost:3100/studentUpdate/${sid}`,values)
    .then(res=>{
        console.log(res)
        navigate('/')
    }).catch(err =>console.log(err))
   }
  return (
    <div className='d-flex justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
            <h2>Edit student</h2>
            <div className='mb-2'> 
                <label>FirstName</label>
                <input type='text' placeholder='Enter FirstName' className='form-control' value={values.firstname}
                onChange={e=>setValues({...values,firstname:e.target.value})}/>
            </div>
            <div> 
                <label>LastName</label>
                <input type='text' placeholder='Enter LastName' className='form-control' value={values.lastname}
                onChange={e=>setValues({...values,lastname:e.target.value})}/>
            </div>
            <div> 
                <label>ID</label>
                <input type='number' placeholder='Enter ID' className='form-control' value={values.id}
                onChange={e=>setValues({...values,id:e.target.value})}/>
            </div>
            <div> 
                <label>E-Mail</label>
                <input type='text' placeholder='Enter E-Mail' className='form-control' value={values.email}
                onChange={e=>setValues({...values,email:e.target.value})}/>
            </div>
            <div> 
                <label>PhoneNumber</label>
                <input type='number' placeholder='Enter PhoneNumber' className='form-control' value={values.phonenumber}
                onChange={e=>setValues({...values,phonenumber:e.target.value})}/>
            </div>
            <div> 
                <label>Year</label>
                <input type='number' placeholder='Enter Current Year' className='form-control' value={values.year}
                onChange={e=>setValues({...values,year:e.target.value})}/>
            </div>
            <div> 
                <label>College/Institution</label>
                <input type='text' placeholder='Enter Collage' className='form-control' value={values.college}
                onChange={e=>setValues({...values,college:e.target.value})}/>
            </div>
            <button>Update</button>
        </form>

    </div>
    </div>
  )
}

export default Edit