import { Link } from "react-router-dom"
export const Already=(({text,a,to})=>{
    return <div className="flex justify-center">
        <p className="text-center text-lg ">{text} <Link className="underline" to={to}>{a}</Link> </p>

    </div>
})