import { useEffect, useState } from "react";
function UseEffect(){
    const [products , setproducts] = useState([])
    const [search , setsearch] = useState("")
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then((res )=> res.json())
        .then((res)=>setproducts(res))
        console.log("useEffect reder")
    },[])

  var filtered = products.filter((data)=>
    data.title.toLowerCase().includes(search.toLowerCase()))

  console.log("componet render=>",products )
return(
    <>
    <h1 className="m-4 text-center font-bold text-2xl">Search </h1>
    <input onChange={(e)=>setsearch(e.target.value)}
    placeholder="Search" 
    className=" mx-5 border rounded p-3 w-[50%]" />
    {
        filtered.map((data,index)=>{
            return(
                <div key={index} className="flex m-4 border rounded">
                    <h1 className="p-3 w-full bg-purple-100">{data.title}</h1>
                </div>
            )
        })
    }
</>
)

}
export default UseEffect;