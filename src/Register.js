import {
    Typography,
    Button,
    
  } from '@mui/material'
  
  import React from 'react'
  
  
  import TextField from '@mui/material/TextField'
  import { useNavigate } from 'react-router-dom'
  
  import { useState } from 'react';
  import {Link} from 'react-router-dom';
  
  
  export function Register() {
    
    const navigate=useNavigate();
    const[errorMsg,setErrorMsg]=useState("");
    const login=()=>navigate("/Login");
    const [values,setValues]=useState({})
  

    return <div className="add-user-container">
           
    <form  
 
    className="add-user-form" >
      <Typography variant="h4" pb={2}
    sx={{
      textAlign: 'center',
    }}>
     Register User
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
      label="Email ID"
      type="Email"
      value={values.Email} 
      name="Email"
   
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
      variant="contained">SignUp</Button>
      <div className="text-center" style={{color:"red"}}>
    {errorMsg}
    </div>
    <div className="text-center" style={{color:"blue"}}>
      <Link to="/Login">Login!</Link>
      <br/>
      <br/>
     <Link to="/ForgetPassword">Forget Password?</Link>
    </div>
    </form> 
  </div>;
  }
  
  