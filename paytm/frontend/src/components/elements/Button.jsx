

export const Button=(({text,onClick})=>{
return <div className="flex justify-center px-4 py-2 mt-6 ">
    <button onClick={onClick} className="bg-sky-950 text-white rounded-md px-6 py-3  border-none hover:bg-slate-400">{text}</button>
</div>

})