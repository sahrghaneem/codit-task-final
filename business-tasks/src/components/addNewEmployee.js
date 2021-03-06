import React from "react";
import swal from 'sweetalert';
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
const axios = require('axios');


const AddUser = () => {
 var username= '';
 var password= '';
 const navigate=useNavigate();

 const onRigistName = (e) =>({
  [e.target.name]: e.target.value ,
 });

 const onRigistPass = (e) =>({
   [e.target.name]: e.target.value ,
  });
  // \-=\[\]{};:"\\|,.<>\/?]+/
 const addUser = () => {
password = document.getElementById("pass").value;
username = document.getElementById("user").value;
if(username.length>=4 )
if(password.length >5  && password.length<=10 ){
    axios.post('http://localhost:5000/api/tasks/addUser', {
      username: username,
      password: password
    }).then((res) => {
      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });
      navigate('/');
    }).catch((err) => {
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
    });
  }
  else{
    alert ('Enter a Password between 6 to 10 characters')
  }
  else{
    alert ('Enter a username 4 characters or more !')

  }
 }
    return (
      <div style={{ marginTop: '200px' }}>
        <div>
          <h1>Add User</h1>
        </div>

        <div>
        <input
        id="user"
        type="text"
        placeholder="enter a username"
        onChange={onRigistName}
      />
        
          <br /><br />
          <input
          id="pass"
          type="password"
          placeholder="enter a password"
          onChange={onRigistPass}
        />
        
          <br /><br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            onClick={addUser}
          >
            Add User
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
        </div>
      </div>
    );
  }

export default AddUser;
