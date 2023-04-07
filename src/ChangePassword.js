import {
  Typography,
  Button,
  
} from '@mui/material'

import React from 'react'
import TextField from '@mui/material/TextField'
import {Link} from 'react-router-dom';
import { useState } from 'react';
export function ChangePassword() {

}

function SetNewPassword({id}){
  const[values,setValues]=useState({})

  
  return (
  <div className="add-user-container">
  <form  
  
  className="add-user-form" >
    <Typography variant="h4" pb={2}
  sx={{
    textAlign: 'center',
    marginTop:"20px"
  }}>
   Change Password
  </Typography>
    
  <TextField
    className="add-user-name"
    label="New Password"
    type="password"
    value={values.Password} 
    
 
    />
    <TextField
    className="add-user-name"
    label="Confirm Password"
    type="password"
    value={values.Password2} 
    

    />
     <Button className="add-user-btn" 
      color="primary"
    type="submit"
    variant="contained">Submit</Button>
    <div className="text-center" style={{color:"red"}}>
  
  </div>
    <div className="text-center" style={{color:"blue"}}>
    <Link to="/Register">Create  Account!</Link>
    <br/>
    <br/>
   <Link to="/Login">Login to your Account!</Link>
  </div>
 </form> 
</div>
);
}