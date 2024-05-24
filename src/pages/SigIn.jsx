import React from "react";
import { useState } from 'react';
import { Forms } from '../components/Forms';
import { doPost } from '../utils/doPost';

export function SingIn(){

  const URL = 'http://localhost:4000/registrar'||'';
  const [postUser, setPostUser] = useState({
    user:'',
    password:'',
    email:''
  });

  const handleInput = (event)=>{
    setPostUser({...postUser, [event.target.name]: event.target.value})
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(postUser);
    doPost(URL, postUser)
  };

  return (
    <div className="App">
      <Forms onChange={handleInput}
      onSubmit={handleSubmit}/>
    </div>
  );
};