

export const Navbar=(({text,username,onclick})=>{
    return <div className="flex justify-center pt-2">

     <div className="p-4 border-black border-2 divide-solid flex w-3/4 justify-between items-center rounded-2xl bg-slate-400">
        <h3 className="font-sans" >{text}</h3>
        <div className="flex gap-4">
            <p className="text-xl  self-center">Hello</p>
            <p className="text-xl self-center">{username ? username.toUpperCase() : "Guest"}</p>
            <button className="bg-white cursor-pointer rounded-full w-10"> {username && username.length > 0 ? username.split("")[0].toUpperCase() : "G"}</button>

            <button onClick={onclick} className="bg-slate-50 rounded-md p-2 outline-none">Logout</button>

        </div>
    </div>
    </div>
})