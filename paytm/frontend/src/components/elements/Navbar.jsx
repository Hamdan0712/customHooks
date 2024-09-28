

export const Navbar=(({text,username})=>{
    return <div className="flex justify-center pt-2">

     <div className="p-4 border-black border-2 divide-solid flex w-3/4 justify-between items-center rounded-2xl bg-slate-400">
        <h3 className="font-sans" >{text}</h3>
        <div className="flex gap-4">
            <p className="text-xl">Hello</p>
            <p className="text-xl">{username ? username.toUpperCase() : "Guest"}</p>
            <button className="bg-white cursor-pointer rounded-full w-7"> {username && username.length > 0 ? username.split("")[0].toUpperCase() : "G"}</button>
        </div>
    </div>
    </div>
})