import { useState } from "react"
import axios from "axios"

export const Navbar=()=>{

    const [city,setCity]=useState("") 

    const fetchData= async()=>{
        
       if(!city){
        console.log("Enter a city name")
        return ;
       }

        const endpoint=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2bc4149f12f91e30f056a2dab7b30921&units=metric`
        
        
        try{
        
        
            const response =await axios.get(endpoint)
            console.log(response.data.list[0].main.temp);
        }catch{
            console.log("there was an error fetching the data");
        }
        
            
        }
return(
     <>

      <input onChange={(e)=> setCity(e.target.value)}  placeholder="Enter the City" type="search" className="border-none px-2 py-2 outline-none text-center" />
        <button onClick={fetchData} className="bg-blue-500 text-white px-2 py-2">Search</button>
      
      </>
)
}


