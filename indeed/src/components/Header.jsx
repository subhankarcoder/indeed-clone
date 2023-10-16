import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { routePath } from "../routes/route";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase-config";
import { signOut } from "firebase/auth";
import SignUp from "../pages/SignUp";
import "./Header.css";
const StyledAppBar = styled(AppBar)({
  background: "#2d2d2d",
  height: 64,
  "& > div > a": {
    marginRight: 20,
    fontSize: 14,
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer",
  },
});
const Header = () => {
  const logo =
    "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
    const navigate = useNavigate();
    const logout = async() => {
      try{
        await signOut(auth);
        navigate(routePath.signup);
      }catch(err) {
        console.log(err.message);
      }
    }
  return (
    <div>
      <StyledAppBar>
          <Toolbar>
            <a onClick={() => navigate(routePath.home)}><img src={logo} alt="logo" className="logo" /></a>
            {/* <Link to={routePath.create}>Post a job</Link>
            <Link to={routePath.posts}>Find jobs</Link> */}
            <a onClick={() => navigate(routePath.create)}>Post a Job</a>
            <a onClick={() => navigate(routePath.posts)}>Find Jobs</a>
            <button className="log-out" onClick={logout}>Log Out</button>
          </Toolbar>
      </StyledAppBar>
    </div>
  );
};

export default Header;
