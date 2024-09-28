import { useState } from "react";
import { Heading } from "../elements/Heading.jsx";
import { Subheading } from "../elements/Subheading.jsx";
import { Inputs } from "../elements/Inputs.jsx";
import { Button } from "../elements/Button.jsx";
import { Already } from "../elements/Already.jsx";
export const Signup=()=>{

  

    return (
     <div className="flex h-screen items-center justify-center  ">


        <div className=" bg-slate-500 h-2/3 w-96 rounded-md">
                <Heading title={"Sign-Up"}></Heading>
                 <Subheading sub={"Enter your Information to Create an Account"}></Subheading>
                 <Inputs label={"Full Name"} placeholder={"Hamdan"} type={"text"} ></Inputs>

                 <Inputs label={"Username"} placeholder={"hamdanaveed@07@gmail.com"} type={"email"} ></Inputs>

                 <Inputs label={"Password"} placeholder={"123456"} type={"password"} ></Inputs>
                    <Button text={"Sign-up"}></Button>
                <Already a={"Sign-in"} to={'/login'} text={"Already Have an Account? "}></Already>

        </div>
            
    </div>
    )
}