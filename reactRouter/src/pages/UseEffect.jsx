import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

function UseEffect(){
    const [products , setproducts] = useState([])
    const [search , setsearch] = useState("")
    const [searchCat, setSearchCat] = useState("")
    const [searchPrice, setSearchPrice] = useState(0)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then((res )=> res.json())
        .then((res)=>setproducts(res))
        console.log("useEffect reder")
    },[])

  var filtered = products.filter((data)=>
    data.title.toLowerCase().includes(search.toLowerCase()) &&
  (searchCat === "" || data.category.toLowerCase() === searchCat.toLowerCase()) &&
  (searchPrice === 0 || data.price <= searchPrice)    )

  console.log("componet render=>",filtered )
return(
    <>
    <h1 className="m-4 text-center font-bold text-2xl">Search </h1>

    <input onChange={(e)=>setsearch(e.target.value)}
    placeholder="Search Titlte" 
    className=" mx-5 border rounded p-3 w-[50%]" />


    <select 
        value={searchCat}
        onChange={(e) => setSearchCat(e.target.value)}
        className="mx-5 border rounded p-3 w-[25%]"
      >
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

<input type="number"
    onChange={(e)=>setSearchPrice(Number(e.target.value))}
    placeholder="Search Price" 
    className=" mx-5 border rounded p-3 w-[20%]" />

    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
   
    {
        filtered.map((data,index)=>{
            return(
                <div key={index} className="flex flex-wrap -m-4">
                     <ProductCard image={data.image} title={data.title} category={data.category}
                   price={data.price} />
                </div>
            )
        })
    }
    </div>
    </section>
</>
)

}
export default UseEffect;