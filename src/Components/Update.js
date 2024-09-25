import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router';
import {Link} from 'react-router-dom'

const Update = () => {

  let data= [
   {
    id:1,
    name:"tj",
    age:22,
    adult:true
   },
   {
    id:1,
    name:"tj",
    age:22,
    adult:true
   },
   {
    id:1,
    name:"tj",
    age:22,
    adult:true
   },
  ]

  const [id,setId]= useState();
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const [age, setAge] = useState("")

  const navigate =useNavigate();
  
  const update= (e)=>{
    e.preventDefault();
    axios.put(`https://6512a02fb8c6ce52b395e8e2.mockapi.io/Mydata/${id}`,{
      name: name,
      email: email,
      job: job,
      age: age
    }).then(()=>{navigate("/read");
    alert("your data has submitted sucessfully");});

  }

  useEffect(()=>{
    setId(localStorage.getItem("id"));
   setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setJob(localStorage.getItem("job"));
    setAge(localStorage.getItem("age"));
  },[])
  return (
    <div>
        <div>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email-Address</label>
  <input type="email" className="form-control" value={email}  onChange={(e)=>{setEmail(e.target.value)}}  id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">NAME</label>
  <textarea className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} id="exampleFormControlTextarea1" rows="2"></textarea>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">JOB-title</label>
  <textarea className="form-control" value={job} onChange={(e)=>{setJob(e.target.value)}} id="exampleFormControlTextarea1" rows="2"></textarea>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">AGE</label>
  <input type='number' className="form-control" value={age} onChange={(e)=>{setAge(e.target.value)}} id="exampleFormControlTextarea1" rows="2"></input>
</div>
<button type="submit" onClick={update} className="btn btn-primary">UPDATE</button>
<Link to="/read">
<button type="submit" className="btn btn-primary my-3 mx-3">BACK</button>
    </Link>
    </div>
    </div>
  )
}

export default Update