import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { TextField, Box, styled, Typography, Button } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase-config";
import { routePath } from "../routes/route";

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

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();
  const signUpImg =
    "https://images.pexels.com/photos/13312405/pexels-photo-13312405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const register = async() => {
        try{
            const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
            navigate(routePath.home);

        }catch(err) {
            console.log(err.message);
        }
    }
  return (
    <div>
      <div className="sign-up">
        <div className="sign-up-img">
          <img src={signUpImg} alt="sign-up-img" />
        </div>
        <div className="sign-up-form">
          <h1>Sign Up</h1>
          <FormWrapper>
            <TextField
              id="outlined-basic"
              label="Enter email"
              variant="outlined"
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <TextField
              id="outlined-password-input"
              label="Enter password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button className="sign-up-btn" onClick={register}>Sign Up</button>
          </FormWrapper>
          <div className="toggle-tab">
            <p>Already have an account?</p>
            <a className="toggle-link" onClick={() => navigate(routePath.login)}>Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
