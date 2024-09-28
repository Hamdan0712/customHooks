export const Friendname=(({username,logo})=>{

    return <div className="flex  justify-center items-center gap-3 mt-2">
         <button className="bg-green-400 cursor-pointer rounded-full w-7"> {logo}</button>
         <p className="text-xl">{username}</p>
    </div>
})