import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { TextField, Box, styled, Typography, Button } from "@mui/material";
import { routePath } from "../routes/route";
import { auth } from "../services/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";


const FormWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "70%",
    padding: 20,
    borderRadius: 20,
    "& > *": {
      marginTop: "20px !important",
    },
  });

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const loginImg = "https://images.pexels.com/photos/10269842/pexels-photo-10269842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const navigate = useNavigate();
  const login = async() => {
    try {
        const user = signInWithEmailAndPassword(auth,loginEmail,loginPassword);
        const userCredential = (await user).user;
        if(userCredential) {
            navigate(routePath.home);
        }else{
            alert("User not found!");
        }
    }catch(err) {
        console.log(err.message);
    }
  }
  return (
    <div>
      <div className="sign-up">
        <div className="sign-up-img">
          <img src={loginImg} alt="sign-up-img" />
        </div>
        <div className="sign-up-form">
          <h1>Log in</h1>
          <FormWrapper>
            <TextField
              id="outlined-basic"
              label="Enter email"
              variant="outlined"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <TextField
              id="outlined-password-input"
              label="Enter password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button className="sign-up-btn" onClick={login}>
              Log in
            </button>
          </FormWrapper>
          <div className="toggle-tab">
            <p>Don't have an account?</p>
            <a className="toggle-link" onClick={() => navigate(routePath.signup)}>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
