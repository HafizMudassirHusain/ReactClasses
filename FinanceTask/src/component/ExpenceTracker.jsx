

function ExpenceTracker({
    setAmount, setType , handleAddTransaction, transaction,Amount,type
}){
    const totalIncome = transaction.reduce(
        (acc, transection) => transection.type == "Income" ? acc + Number(transection.Amount) : acc, 0 
        )
        const totalExpence = transaction.reduce(
          (acc, transection) => transection.type == "Expence" ? acc + Number(transection.Amount) : acc, 0 
          )
        const balceAmmount = totalIncome - totalExpence;
        
return(
    <>
    <h1 className=' text-center font-bold text-3xl my-5'> Expance Management </h1>
    <div className='flex justify-center items-center gap-4'>
     <div className="p-4 border border-blue-500 rounded-md">
       <h1>Total Income</h1>
       <h1>{totalIncome}</h1>
     </div>
     <div className="p-4 border border-blue-500 rounded-md">
       <h1>Total Expence</h1>
       <h1>{totalExpence}</h1>
     </div>
     <div className="p-4 border border-blue-500 rounded-md">
       <h1>Balance</h1>
       <h1>{balceAmmount}</h1>
     </div>
    </div>
 <div className='flex justify-center items-center'>

    <input value={Amount}
    onChange={(e)=>{setAmount(e.target.value)}}
    type="Number"
    placeholder='Enter Amount'
    className='p-2 border border-blue-600 rounded'
    />

    <select value={type}
    onChange={(e)=>{setType(e.target.value)}}
    className='m-4 text-center p-3'>
     <option value="Expence">Expence</option>
     <option value="Income">Income</option>
    </select>

    <button
     onClick={handleAddTransaction}
    className='p-2 border bg-blue-600 text-white rounded-xl'>Submit</button>
 </div>

 {
      transaction.map((data,ind) => {
       return(
         <div key={ind} className='flex m-auto justify-around'>
           <h1 className='font-bold text-3xl'>
             {ind+1}{') '} {data.Amount}</h1>

           <h1 className={`font-bold underline text-3xl 
             ${data.type === 'Income' ? 'text-green-500' : "text-red-500"}`}>{data.type}</h1>
         </div>
       );
      })
    }
 </>
)
}
export default ExpenceTracker;



