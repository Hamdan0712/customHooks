

export const Inputs=(({label,placeholder,type})=>{

    return <div className="flex flex-col justify-center px-4 py-2">
        <label className="text-lg" htmlFor="">{label}</label>
        <input className="outline rounded-md p-2 border-none outline-none" type={type} placeholder={placeholder} />
    </div>


})