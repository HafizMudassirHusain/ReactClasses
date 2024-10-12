import { useEffect, useState } from "react";
import ProductCard from "../componet/ProductCard";
import { Link } from "react-router-dom";
import { Button, Pagination, Row , Select} from "antd";
import producthero from '../assets/producthero1.1.jpg';
import '../componet/ProductsComponent/ProductCom.css'
import Banner from "../componet/ProductsComponent/Banner";

function Product(){
    const [product, setProducts] = useState([]);
    const [search, setsearch] = useState("");
    const [category, setCategory] = useState([]);
    const [skip, setskip] = useState(0);
    const [specificItem, setspecificItem] = useState("");
    const [limit, setlimit] = useState(20);
    const [total, setTotal] = useState(20);
    // console.log(product)
    // console.log("search => ",search)
   
    useEffect(()=>{
      fetch('https://dummyjson.com/products/categories')
         .then(res => res.json())
         .then(res => setCategory(res));
    },[])
   
useEffect(()=>{
    fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`)
    .then(res => res.json())
     .then(res =>{ 
  setProducts(res.products);
  setTotal(res.total);
});
},[skip]);

    const filtered = product.filter((data)=> 
    data.title.toLowerCase().includes(search.toLowerCase()) &&
    (specificItem.toLowerCase() == "" || 
    data.category.toLowerCase().includes(specificItem.toLowerCase()))
    )
    console.log(product)

    return(
      <>
        <div style={{backgroundImage:
        `url(${producthero})`,
         height: "50vh",
        //  objectFit:"cover",
        //  marginTop:"-100px",
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",}}
         className="shop-hero h-[40vh] ">
          <div className="white h-full ">
           <div className="h-full text-center flex flex-col justify-center items-center">
            <h1 className="font-semibold text-5xl">Shop</h1>
            <div className="my-4 px-4 text-xl">
            <Link to={'/'} className="font-semibold">{"Home > "}</Link> <Link> Shop</Link>
            </div>
           </div>
          </div>

         </div>
        <div className="container p-5 m-auto ">
        <div className="container flex justify-between my-10">
         <input placeholder="Search here"
         className=" border border-blue-500 w-1/2 p-2 rounded-md" 
         onChange={(e) => setsearch(e.target.value)} />
         <Select
    showSearch
    placeholder="Select Category"
    optionFilterProp="label"
    className="w-1/3 h-14"
    onChange={(e)=> setspecificItem(e)}
    // onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
    }
    options={category.map((data)=>{
         return {label: data.name, value : data.slug};
    })} />
          <Link to={"/products"}>
            <Button className="py-6">Search</Button>
          </Link>
        </div>
  
        <Row gutter={16} >
          {filtered.map((data) => (
            <ProductCard key={data.id} item={data} />
          ))}
        </Row>
        <div className="m-4 flex justify-center items-center">
        <Pagination className="mt-8"
          onChange={(num)=>{
             setskip((num - 1) * 20)
          }}
      defaultCurrent={1}
      pageSize={20}
      total={total} />
        </div>
        <Banner />
      </div>
      </>
    )
   }
   export default Product;