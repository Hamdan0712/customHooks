
import { Heading } from "../elements/Heading.jsx";
import { Subheading } from "../elements/Subheading.jsx";
import { Inputs } from "../elements/Inputs.jsx";
import { Button } from "../elements/Button.jsx";
import { Already } from "../elements/Already.jsx";
import { useState } from "react";
import axios from "axios";
export const Login=()=>{

const [username,setusername]=useState("");
const [password,setpassword]=useState("");

    return (
        <div className="flex h-screen items-center justify-center  ">
   
   
           <div className=" bg-stone-400 h-2/4 w-96 rounded-md">
                   <Heading title={"Login"}></Heading>
                    <Subheading sub={"Enter your Information to Create an Account"}></Subheading>
                   
                    <Inputs onchange={(e)=>{
                        setusername(e.target.value);
                    }} label={"Username"} placeholder={"hamdanaveed@07@gmail.com"} type={"email"} ></Inputs>
   
                    <Inputs onchange={(e)=>setpassword(e.target.value)} label={"Password"} placeholder={"123456"} type={"password"} ></Inputs>
                       <Button onClick={async()=>{
                        await axios.post("http://localhost:3000/api/v1/user/login",{username:username,password:password},{
                            withCredentials:true
                        })
                       }} text={"Login"}></Button>
                   <Already  a={"Sign-up"} to={'/'}   text={"Don't  Have an Account? "}></Already>
   
           </div>
               
       </div>
       )

  
}