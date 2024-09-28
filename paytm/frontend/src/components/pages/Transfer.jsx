import { Friendname } from "../elements/Friendname"
import { Heading } from "../elements/Heading"
import { Inputs } from "../elements/Inputs"
import { Button } from "../elements/Button"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import {useState} from "react"



export const Transfer=()=>{
    const [id,setId]=useSearchParams();
    const[fullName,setfullName]=useSearchParams();;
    const [amount,setAmount]=useState(0);
    console.log(id.get('id'));


    return (
        <div className="flex h-screen items-center justify-center  ">
   
   
           <div className=" bg-gray-500 h-2/4 w-96 rounded-md">
                   <Heading title={"Send Money"}></Heading>
                    <Friendname username={fullName.get('name')} logo={"A"}></Friendname>
                    <Inputs onchange={(e)=>{
                        setAmount(e.target.value)
                    }}  label={"Amount in Rs."} placeholder={"Enter Amount"} type={"number"} ></Inputs>
   
                       <Button onClick={async()=>{
                        await axios.post("http://localhost:3000/api/v1/account/transfer",{to:id.get('id'),amount:amount},{
                            withCredentials:true
                        })
                       }} text={"Initiate Transfer"}></Button>
                   
           </div>
               
       </div>
       )

}