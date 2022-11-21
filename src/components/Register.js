import React from "react";
import { useState } from "react";


const EMAIL_REQUIRE = "Please enter your email!";
const EMAIL_WRONG = "Invalid email!!";
const PASSWORD_REQUIRE = "Please enter your password";
const PASSWORD_WRONG = "Invalid password!";
const SUCCESS = "Submit form success";
const regEmail = /\S+@\S+\.\S+/;
const regPass = /[A-Z][a-zA-Z0-9]{5,31}/;

    

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [emailErr, setEmailErr] = useState();
    const [passwordErr, setPasswordErr] = useState();
    const [confirmPassword, setConfirmpassword] = useState();
    const [confirmPasswordErr, setconfirmPasswordErr] = useState();
    
    
     
    const handleSubmit = (event) => {
      const newEmailErr = email === undefined ? 
        EMAIL_REQUIRE : email.length === 0 ? 
        EMAIL_REQUIRE : !regEmail.test(email) ? 
        EMAIL_WRONG : ""
      const newPassErr = password === undefined ? 
        PASSWORD_REQUIRE : password.length === 0 ? 
        PASSWORD_REQUIRE : !regPass.test(password) ? 
        PASSWORD_WRONG : ""
        setEmailErr(newEmailErr);
        setPasswordErr(newPassErr);

      const newConfirmPasswordErr = !confirmPassword? "Please enter your Confirm password!" :confirmPassword !== password ?"Invalid Confirm password!" : ""
        setconfirmPasswordErr(newConfirmPasswordErr);
      if(newEmailErr === "" && newPassErr === "")
      {
        console.log("email", email);
        console.log("password", password);
        console.log("confirmPass", confirmPassword);
      }

      
              
    };

    const handleChangeEmail = (event) =>{

      const newEmail = event.target.value;
      setEmail(newEmail)
      
    }
  
    const handleChangePass = (event) =>{
      const newPassword = event.target.value;
      setPassword(newPassword);
      
    }

    const handleChangeConfirmPass = (event) => {
      const newConfirmPassword = event.target.value;
      setConfirmpassword(newConfirmPassword);
    }

      

  return (
    <div>
      
      <div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeEmail} />
          <div className="error_email" style={{color: "red" , display: emailErr ? "block" : "none"}}>{emailErr}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPasswordl1"  onChange={handleChangePass} />
          <div className="error_password" style={{color: "red" , display: passwordErr ? "block" : "none"}}>{passwordErr}</div>
        </div>
        <div className="mb-3">
            <label className="form-label" for="confirmPassword">Confirm Password </label>
            <input className="form-control" type="password" id="confirmPassword" onChange={handleChangeConfirmPass} />
            <div className="error__confirmPassword" style={{color: 'red' , display: confirmPasswordErr ? "block" : "none"}}>{confirmPasswordErr}</div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Register</button>
      
      </div>  
     
    </div>
  );
}
