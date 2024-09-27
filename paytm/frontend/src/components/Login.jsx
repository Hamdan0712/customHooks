

export const Login=()=>{

    const [username,setUsername]=useState("");  
    const [password,setPassword]=useState("");  

    return(
        <div>

<h1 className="text-center text-gray-700">Welcome to the Paytm</h1>

<input className="p-3 text-center border-none rounded-md" placeholder="Enter the Email" onChange={setUsername((e)=>e.target.value)} value={username} type="text" />
<input onChange={setPassword((e)=>e.target.value)} value={password} className="p-3 text-center border-none rounded-md"  type="Password" placeholder="Enter the Password here" />

<button className="p-3 bg-blue-500 text-white rounded-md">Sign Or LogIn</button>
        </div>
    )
}