import { useState } from 'react'
import axios from 'axios';
function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  console.log(email,password);

  function handleEmail(e){
    setEmail(e.target.value);
  }
  function handlePassword(e){
    setPassword(e.target.value);
  }

  async function handleClick(){ 
    const responce = await axios.post("http://localhost:3000/login",{
      email,password
    });
    const token = responce.data.token;
    //console.log(responce.data.token);
    localStorage.setItem("token",token);
  }

  return (
    <>
      <input type="text" name='email' placeholder='Email'  onChange={(e)=>handleEmail(e)}/>
      <input type="text" name='password' placeholder='Password' onChange={(e)=>handlePassword(e)} />
      <button onClick={handleClick}>Login</button>
    </>
  )
}

export default App
