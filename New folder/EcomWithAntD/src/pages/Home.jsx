import { useEffect, useState } from "react";
import ProductCard from "../componet/ProductCard";
import { Link } from "react-router-dom";
import { Button, Row } from "antd";

   function Home(){
    const [product, setProducts] = useState([]);
    console.log(product)

useEffect(()=>{
    fetch('https://dummyjson.com/products?limit=12')
.then(res => res.json())
.then(res => setProducts(res.products));
},[])

    return(
        <div className="container  p-5 m-auto ">
        <div className="container flex justify-between my-10">
          <h1 className="text-3xl">Find your Best Products</h1>
          <Link to={"/products"}>
            <Button>See All</Button>
          </Link>
        </div>
  
        <Row gutter={16} >
          {product.map((data) => (
            <ProductCard key={data.id} item={data} />
          ))}
        </Row>
      </div>
    )
   }
   export default Home;