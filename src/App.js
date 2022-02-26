import "./App.css";
import React, { useState } from "react";
import axios from "axios";


 const regUrl= "http://127.0.0.1:8000/api/auth/login";

function App() {
  const [loginEmail,setLoginEmail] = useState('');
  const [loginPassword,setLoginPassword] = useState('');
  const submitLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    axios.post(regUrl,{
      email:loginEmail,
      password:loginPassword
    }).then((response)=> {
      console.log(response.data);
    })
  }
  
  return (
    <div>
      
      <input type="text" name="email" id="email" placeholder="email" onChange={(e)=>{
        setLoginEmail(e.target.value)
      }}/>
      <input type="text" name="password" id="password" placeholder="password" onChange={(e)=>{
        setLoginPassword(e.target.value)
      }}/>
      <input type="button" value="register" onClick={submitLogin} />
    </div>
  );
}

export default App;
