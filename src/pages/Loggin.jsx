import React, { useState } from "react";
import { LogginForm } from "../components/LogginForm";
import { doPost } from "../utils/doPost";
import { Navigate } from "react-router-dom";

export function Loggin(){

  const [postUser, setPostUser] = useState({
    user:'',
    password:''
  });

  const [redirectTo, setDirectTo] = useState(false);

  const handleInput = (event)=>{
    setPostUser({...postUser, [event.target.name]: event.target.value})
  };

  const handleLoggin = async(event)=>{
    try{
      event.preventDefault();
      const resp = await doPost('http://localhost:4000/loggin', postUser);
      console.log('loggin exitoso');
      console.log('token recibido', resp.token);
      
      const timeDuration = 3000;
      const expirationDate = new Date().getTime() + timeDuration * 10;
      localStorage.setItem('token', resp.token);
      localStorage.setItem('expirationToken', expirationDate);
      
      setDirectTo(true);

    }catch(err){
      console.log('problemas en la comprobacion', err);
    }
  }

  if(redirectTo){
    console.log(redirectTo);
    return <Navigate to = "/home"/> 
    }

  return(
    <div>
      <LogginForm onChange={handleInput} onSubmit={handleLoggin}/>
    </div>
  );
}