import { Navbar } from "../elements/Navbar"
import {Balance} from "../elements/Balance"
import { Users } from "../elements/Users"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Dashboard=()=>{
    const navigate=useNavigate();

    const [balance,setBalance]=useState(0);
    const [username,setUsername]=useState("");

    useEffect(()=>{
        const fetchData=async()=>{

            await axios.get('http://localhost:3000/api/v1/user/profile',{
                withCredentials:true
            }).then((res)=>{
                setBalance(res.data.user.balance);
                setUsername(res.data.user.username);
                console.log(res.data.user.username);
            })
        }
        fetchData();

    },[])


    return(
        <div className="bg-slate-300 w-screen h-screen">
            <Navbar onclick={async()=>{
                await axios.post("http://localhost:3000/api/v1/user/logout",{
                    withCredentials:true
                }).then(()=>{
                    navigate('/')
                })
                
            }} text={"Paytm"} username={username}></Navbar>
            <Balance balance={balance}></Balance>
            <Users username={"Hamdan"}></Users>
            
        </div>
    )
}