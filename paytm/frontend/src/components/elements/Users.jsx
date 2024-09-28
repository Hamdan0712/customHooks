import axios from "axios";
import { useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
export const Users=(({username})=>{

const [users,setUsers]=useState([]);
const [filter,setfilter]=useState("");

useEffect( ()=>{
    axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter,{
        withCredentials:true
    }).then((res)=>{
        setUsers(res.data.user);
    })

},[filter])

    return <div className="flex justify-center pt-2">
        <div className=" w-3/4 bg-slate-300"> 

        <div className="border-2 border-solid border-black rounded-lg p-2 h-max">

        <p className="text-xl p-3 font-bold">Users</p>
            <input onChange={(e)=>{setfilter(e.target.value)}} className="w-full p-2 rounded-md mb-3" type="text"  placeholder="Search Users..." />




{/* user-div startss */}

<div className="flex flex-col gap-3">

      {users.map((user)=>{
        return <SingleUser key={user._id} user={user}></SingleUser>
      })}
           
            </div>
            {/* userDiv ends */}

        </div>

        </div>
    </div>
})

const SingleUser=(({user})=>{
    const navigate=useNavigate();

    return  <div className="border-black h-auto p-1 flex justify-between border-solid border-2 ">


    <div className="flex h-14 gap-3 px-2  items-center">
<button className="bg-white cursor-pointer rounded-full w-7"> U</button>
    <p className="text-xl text-center">{user.fullName}</p>
    </div>

    <button onClick={(e)=>{
        navigate(`/transfer?id=${user._id}&name=${user.fullName}`,)
    }} className=" rounded-md w-52  outline-none bg-slate-500 ">Send Money</button>
</div>

})