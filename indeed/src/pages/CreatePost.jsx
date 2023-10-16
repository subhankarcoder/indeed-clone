import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { TextField, Box, styled, Typography, Button } from "@mui/material";
import "./CreatePost.css";
import { savePost } from "../services/api";
import { routePath } from "../routes/route";

const Component = styled(Box)({
  background: "#F5F5F5",
  padding: "80px 200px",
});

const Container = styled(Box)({
  display: "flex",
  background: "#FFFFFF",
  borderRadius: 20,
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 70px",
  "& > p": {
    fontSize: 35,
    fontWeight: 700,
  },
});
const FormWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginTop: 20,
  padding: 20,
  background: "#FFFFFF",
  borderRadius: 20,
  "& > *": {
    marginTop: "20px !important",
  },
});

const defaultObj = {
  profile: "",
  type: "",
  description: "",
  experience: "",
  technology: [],
  salary: "",
};
const options = {
  type: ["Online", "Offline"],
  experience: ["0-2 Years", "3-5 Years", "5 Years or more"],
  technology: [
    "Java",
    "JavaScript",
    "React",
    "Angular",
    "Node.js",
    "Docker",
    "AWS",
    "HTML",
    "CSS",
  ],
  salary: [
    "Rs 0-300000",
    "Rs 300000-500000",
    "Rs 500000-800000",
    "Rs 800000-1000000",
    "Rs 1000000-1500000",
    "Rs 1500000-2000000",
    "Rs 2000000 or more",
  ],
};

const CreatePost = () => {
  const [data, setData] = useState(defaultObj);
  const[submitState, setSubmitState] = useState(false);
  const formCondition = data.description && data.experience && data.profile && data.salary && data.technology && data.type;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const saveJob = async ()=> {
    if (formCondition) {
      // All fields are filled, so save the job post
      console.log(setSubmitState);
      await savePost(data);
      navigate(routePath.posts);
    } else {
      alert("Please fill out all the form fields.");
    }
  }
  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";
  return (
    <div>
      <Header />
      <Component>
        <Container>
          <Typography>Create a job post</Typography>
          <img src={image} alt="create" />
        </Container>
        <FormWrapper>
          <TextField
            placeholder="Job title"
            onChange={handleChange}
            name="profile"
          />
          <Dropdown
            id="job-type-label"
            value={data.type}
            handleChange={handleChange}
            name="type"
            label="Job Type"
            options={options.type}
          />
          <TextField
            placeholder="Job description"
            onChange={handleChange}
            name="description"
          />
          <Dropdown
            id="experience-label"
            value={data.experience}
            handleChange={handleChange}
            name="experience"
            label="Experience"
            options={options.experience}
          />
          <Dropdown
            id="technology-label"
            value={data.technology}
            handleChange={handleChange}
            name="technology"
            label="Technology"
            options={options.technology}
            multiple
          />
          <Dropdown
            id="salary-label"
            value={data.salary}
            handleChange={handleChange}
            name="salary"
            label="Salary"
            options={options.salary}
          />
          {/* {submitState ? (<Button variant="contained" onClick={saveJob}>Save Job Done</Button>) : (<Button variant="contained" onClick={saveJob}>Save Job</Button>)} */}
          <button onClick={saveJob} className="filled">Post Job</button>
        </FormWrapper>
      </Component>
    </div>
  );
};

export default CreatePost;
