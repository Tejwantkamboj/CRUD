import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Read = () => {
    const [deta, setDeta] = useState([])


    //getting data
    const getrecord= ()=>{
      axios.get("https://6512a02fb8c6ce52b395e8e2.mockapi.io/Mydata")
      .then((response)=>{setDeta(response.data)})
    }

    //delete data
    const handledelete = (id)=>{
axios.delete(`https://6512a02fb8c6ce52b395e8e2.mockapi.io/Mydata/${id}`)
.then(()=>{getrecord();})
    }

    useEffect(()=>{
        getrecord();
    },[])

    const localstore =(id, name,email,job,age)=>{
      localStorage.setItem("id",id);
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
      localStorage.setItem("job",job);
      localStorage.setItem("age",age);
    }

  return (
   <>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">id </th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Job</th>
        <th scope="col">age</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    {deta.map((dt)=>{return(<>
      <tbody key={dt.id}>
      <tr key={dt.id}>
        <th scope="row">{dt.id}</th>
        <td>{dt.name}</td>
        <td>{dt.email}</td>
        <td>{dt.job}</td>
        <td>{dt.age}</td>
        <td>
          <Link to="/update">
        <button type="button" className="btn btn-success" onClick={()=>{localstore(dt.id,dt.name,dt.job,dt.email,dt.age)}}>Edit</button></Link>
        </td>
        <td>
        <button type="button" className="btn btn-danger" onClick={()=>handledelete(dt.id)}>Delete</button>
        </td>
       </tr>
       </tbody>
    </>)})}
    
  </table>
  <Link to="/">
<button type="submit" className="btn btn-primary my-3 mx-3">Create-DATA</button>
    </Link>
  </>
  )
}

export default Read