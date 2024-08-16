import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  //fetch the uses
  useEffect(()=>{
    axios
    .get("http://localhost:4000/api/users")
    .then((response)=>{
      setUsers(response.data.data)
    })
    .catch((error)=>{
      console.error("Erro fetching users", error)
    })
  },[])
  return (
    <>
      <h1>Users</h1>
      <div>
        {users.map((user)=>{
          <div key = {user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          
          </div>
        })}
      </div>
      
    </>
  )
}

export default App
