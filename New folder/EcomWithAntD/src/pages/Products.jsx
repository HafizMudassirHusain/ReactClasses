import { useEffect, useState } from "react";
import ProductCard from "../componet/ProductCard";
import { Link } from "react-router-dom";
import { Button, Pagination, Row , Select} from "antd";

function Product(){
    const [product, setProducts] = useState([]);
    const [search, setsearch] = useState("");
    const [category, setCategory] = useState([]);
    const [skip, setskip] = useState(0);
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
    data.title.toLowerCase().includes(search.toLowerCase())
    )

    return(
        <div className="container  p-5 m-auto ">
        <div className="container flex justify-between my-10">
         <input placeholder="Search here"
         className=" border border-blue-500 w-1/2 p-2 rounded-md" 
         onChange={(e) => setsearch(e.target.value)} />
         <Select
    showSearch
    placeholder="Select Category"
    optionFilterProp="label"
    className="w-1/3 h-14"
    // onChange={onChange}
    // onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
    }
    options={category.map((data)=>{
         return {label: data.name, value : data.slug};
    })}
  />
          <Link to={"/products"}>
            <Button>Search</Button>
          </Link>
        </div>
  
        <Row gutter={16} >
          {filtered.map((data) => (
            <ProductCard key={data.id} item={data} />
          ))}
        </Row>
        <div className="m-4 flex justify-center items-center">
        <Pagination
          onChange={(num)=>{
             setskip((num - 1) * 20)
          }}
      defaultCurrent={1}
      pageSize={20}
      total={total}
    />
        </div>
      </div>
    )
   }
   export default Product;