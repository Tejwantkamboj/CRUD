import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router'
const Create = () => { 

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const [age, setAge] = useState("")
const history= useNavigate();
    // const header = { "Access-Control-Allow-Origin" : "*" }

    const submit = (e)=>{
      // e.preventDefault();
     axios.post("https://6512a02fb8c6ce52b395e8e2.mockapi.io/Mydata",{
  name:name,
  email:email,
  job:job,
  age:age,
  }).then(()=>{history("/read")})
  alert("your data has submitted sucessfully");}

    return (
    <>
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
<div>
<button type="submit" onClick={submit} className="btn btn-primary">SUBMIT</button>
<Link to="/read">
<button type="submit" className="btn btn-primary my-3 mx-3">SHOW-DATA</button>
    </Link>
    </div>
    </>
  )
}

export default Create