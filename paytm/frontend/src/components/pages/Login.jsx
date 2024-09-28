
import { Heading } from "../elements/Heading.jsx";
import { Subheading } from "../elements/Subheading.jsx";
import { Inputs } from "../elements/Inputs.jsx";
import { Button } from "../elements/Button.jsx";
import { Already } from "../elements/Already.jsx";
export const Login=()=>{



    return (
        <div className="flex h-screen items-center justify-center  ">
   
   
           <div className=" bg-slate-500 h-2/4 w-96 rounded-md">
                   <Heading title={"Login"}></Heading>
                    <Subheading sub={"Enter your Information to Create an Account"}></Subheading>
                   
                    <Inputs label={"Username"} placeholder={"hamdanaveed@07@gmail.com"} type={"email"} ></Inputs>
   
                    <Inputs label={"Password"} placeholder={"123456"} type={"password"} ></Inputs>
                       <Button text={"Login"}></Button>
                   <Already  a={"Sign-up"} to={'/'}   text={"Don't  Have an Account? "}></Already>
   
           </div>
               
       </div>
       )

  
}