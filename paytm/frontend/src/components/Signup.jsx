import { useState } from "react";

export const Signup=()=>{

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [fullname,setFullname]=useState(""); 

    return (
        <div className="flex h-screen items-center justify-center relative ">

            <div className="bg-slate-500  w-96 h-80 absolute left-0 top-10">


            <h1 className="text-center text-gray-700">Welcome to the Paytm</h1>

            <input className="p-3 text-center border-none rounded-md" placeholder="Enter the Email"  type="text" />
            <input   className="p-3 text-center border-none rounded-md"  type="Password" placeholder="Enter the Password here" />
            <input   className="p-3 text-center border-none rounded-md"  type="text" placeholder="Enter Your Name" />

            <button className="p-3 bg-blue-500 text-white rounded-md">Signup</button>
            </div>
        </div>
    )
}