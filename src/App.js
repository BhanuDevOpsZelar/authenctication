import React, { useState } from 'react';
import './App.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import {auth} from "./firebase-config";
import { async } from '@firebase/util';

function App() {
  const [registerEmail, setUserEmail] = useState("");
  const [registerPassword, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const registerUser = async()=>{
     try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
     } catch(error){
      console.log(error.message)
     }
  }

  const loginClick = async ()=>{
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch(error){
      console.log(error.message)
    }
  }
  const logOutClick = async () =>{
    await signOut(auth)
  }

  return (
    <div className="App">
      <h1>Register User</h1>
      <input type="email" placeholder='email' onChange={(e)=>{setUserEmail(e.target.value)}}/> <br />
      <input type="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/> <br />
      <button onClick={registerUser}>Register</button><br />

      <h1>Login User</h1>
      <input type="email" placeholder='Email' onChange={(e)=>{setLoginEmail(e.target.value)}}/> <br />
      <input type="password" placeholder='Password' onChange={(e)=>{setLoginPassword(e.target.value)}}/> <br />
      <button onClick={loginClick}>Login</button>
      <br /><br />
      <button onClick={logOutClick}>Signout</button>
    </div>
  );
}

export default App;
