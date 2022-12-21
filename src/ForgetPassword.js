import {
    Typography,
    Button,
    
  } from '@mui/material'
  
  import React from 'react'
 
  
  import TextField from '@mui/material/TextField'
  
  import { useState } from 'react';
  import {Link} from 'react-router-dom';
  
  
  export function ForgetPassword() {
    const[errorMsg,setErrorMsg]=useState("");
    const[values,setValues]=useState({})
  
    
    
    return <div className="add-user-container">
    <form  

    className="add-user-form" >
      <Typography variant="h4" pb={2}
    sx={{
      textAlign: 'center',
    }}>
     E-mail Details
    </Typography>
      
    <TextField
      className="add-user-name"
      label="Enter Registered Email - example:john@abc.com"
      type="Email"
      value={values.Email} 
      name="Email"
  
      />
       <Button className="add-user-btn" 
        color="primary"
      type="submit"
      variant="contained">submit</Button>
      <div className="text-center">
    {errorMsg}
    </div>
      <div className="text-center" style={{color:"blue"}}>
      <Link to="/Register">Create  Account!</Link>
      <br/>
      <br/>
     <Link to="/Login">I can remember my password now!</Link>
    </div>
   </form> 
  </div>;
  }
  
  