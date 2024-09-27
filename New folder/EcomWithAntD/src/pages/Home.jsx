import { useEffect, useState } from "react";
import ProductCard from "../componet/ProductCard";
import { Link } from "react-router-dom";
import { Button, Row, Spin } from "antd";
import Hero from "../componet/Hero";
import HeroLower from "../componet/HeroLower";

   function Home(){
    const [product, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    console.log(product)

useEffect(()=>{
    fetch('https://dummyjson.com/products?limit=12')
.then(res => 
  res.json()
)
.then((res) => {
  setProducts(res.products);
                setIsLoading(false);
}
);
},[])

    return(
        <div className="container p-2 m-auto ">
          <Hero />
          <HeroLower />
        <div className="container p-8">
          <h1 className="m-auto text-center text-4xl font-bold">Our Products</h1>
        <div className="m-4">
       {
        isLoading ? <Spin size="large" fullscreen={true} percent={"auto"}  />
        : <Row gutter={16} >
          {product.map((data) => (
            <ProductCard key={data.id} item={data} />
          ))}
        </Row>
       }
        </div>
          <Link to={"/products"}>
            <Button>See All</Button>
          </Link>
        </div>
      </div>
    )
   }
   export default Home;