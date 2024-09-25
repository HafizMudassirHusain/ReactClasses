import { useQuery } from "react-query";
import { useParams } from "react-router";

function ProductDetails(){
    const {id} = useParams();
    const fatchProducts = async() => {
        const res =await fetch(`https://fakestoreapi.com/products/${id}`)
         return res.json();
      }
      console.log(id)

     const {data:productItem, isLoading,isError} = useQuery({
        queryKey: ["product"],
        queryFn : fatchProducts
      })
      console.log(productItem)
return(
  <div>
      <h1>Product Details</h1>
      {
          isLoading ? <h1>loding...</h1>
          : <h1>{productItem.title}</h1> 
      }
  </div>
)
}
export default ProductDetails;