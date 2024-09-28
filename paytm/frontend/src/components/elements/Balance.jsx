

export const Balance=(({balance})=>{


    return <div className="flex  justify-center">
        <div className="w-3/4 pt-4  ">

        <p className="text-xl font-bold bg-stone-400 inline-block p-4 rounded-xl text-gray-600"> Your Balance is Rs/₹.  <span className="text-black">{balance.toFixed(2)}</span></p>
        </div>
    </div>
})