import {
    Typography,
    Button,
    
  } from '@mui/material'
  
  import React from 'react'
  
  
  import TextField from '@mui/material/TextField'
  import { useNavigate } from 'react-router-dom'
  
  import { useState } from 'react';
  import {Link} from 'react-router-dom';
  
  
  export function Login() {
    
    const navigate=useNavigate();
    const[errorMsg,setErrorMsg]=useState("");
    const [values,setValues]=useState({});
    const entry=()=>navigate("/Welcome");
  
    const submit=()=>{
      alert("Login Successfull")
      navigate("/welcome")
    }
    
    return(
     <div className="add-user-container">
    <form  onSubmit={submit}
  
    className="add-user-form" >
      <Typography variant="h4" pb={2}
    sx={{
      textAlign: 'center',
      marginTop:"20px"
    }}>
     Login Details
    </Typography>
      
      <TextField
      className="add-user-name"
      label="User Name"
      type="text"
      value={values.UserName} 
      name="UserName"
     
      
      />
      <TextField
      className="add-user-name"
      label="Password"
      type="password"
      value={values.Password} 
      name="Password"
    
      
      />
       <Button className="add-user-btn" 
        color="primary"
      type="submit"
      variant="contained">Login</Button>
      <div className="text-center" style={{color:"red"}}>
    {errorMsg}
    </div>
      <div className="text-center" style={{color:"blue"}}>
      <Link to="/Register">Create  Account!</Link>
      <br/>
      <br/>
     <Link to="/ForgetPassword">Forget Password?</Link>
    </div>
   </form> 
  </div>
    )
  };
  
