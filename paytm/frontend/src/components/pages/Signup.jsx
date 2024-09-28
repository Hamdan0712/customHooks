import { useState } from "react";
import { Heading } from "../elements/Heading.jsx";
import { Subheading } from "../elements/Subheading.jsx";
import { Inputs } from "../elements/Inputs.jsx";
import { Button } from "../elements/Button.jsx";
import { Already } from "../elements/Already.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Signup=()=>{

    const [fullName,setFullname]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();
  

    return (
     <div className="flex h-screen items-center justify-center  ">


        <div className=" bg-gray-500 h-2/3 w-96 rounded-md">
                <Heading title={"Sign-Up"}></Heading>
                 <Subheading sub={"Enter your Information to Create an Account"}></Subheading>
                 <Inputs onchange={e=>{
                    setFullname(e.target.value)
                 } } label={"Full Name"} placeholder={"Hamdan"} type={"text"} ></Inputs>

                 <Inputs onchange={e=>{setUsername(e.target.value)}} label={"Username"} placeholder={"hamdanaveed@07@gmail.com"} type={"email"} ></Inputs>

                 <Inputs onchange={e=>{setPassword(e.target.value)}} label={"Password"} placeholder={"123456"} type={"password"} ></Inputs>
                    <Button onClick={async()=>{
                      const response=  await axios.post("http://localhost:3000/api/v1/user/signup",{
                        withCredentials:true
                      },
                      {
                        fullName:fullName
                      ,username:username
                      ,password:password
                      }
                      )
                      navigate('/dashboard')
                      
                      }} text={"Sign-up"}></Button>
                <Already a={"Sign-in"} to={'/login'} text={"Already Have an Account? "}></Already>

        </div>
            
    </div>
    )
}