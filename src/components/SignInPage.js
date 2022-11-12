import {Form,Button,InputGroup,FormControl} from "react-bootstrap";
import React, { useState } from 'react';
import { SignIn } from "../services/authentication";
import { useDispatch } from "react-redux";
import ThirdPartySignIns from "./ThirdPartySıgnIn";
const SignInPage = () =>{
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const dispatch = useDispatch();
    

  return <div style={{width:'30rem', margin:'auto',paddingTop:'8px'}}>
    <Form onSubmit={event =>{
      event.preventDefault(); 
      SignIn(dispatch,{username,password});
    }}>
      <h4 style={{textAlign:'center'}}>Welcome Back</h4>
      <InputGroup className='mb-3'>
          <FormControl placeholder='UserName' onChange={event => setUsername(event.target.value)}></FormControl>
      </InputGroup>
      <InputGroup className='mb-3'>
          <FormControl placeholder='Password' type='password' onChange={event => setPassword(event.target.value)}></FormControl>
      </InputGroup>
      <Button type='submit' variant='primary' style={{margin:'auto',display:'block',with:'10rem'}}>
        Sign In
      </Button>
    </Form>
    <ThirdPartySignIns />
  </div>
}

export default SignInPage;