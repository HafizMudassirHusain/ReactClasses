import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Image } from "antd";
function Carts(){
    const {cartItems, updateToCart, removeCart}= useContext(CartContext)
    console.log("cart pages items => ",cartItems)
    const totalQuantity = cartItems.reduce(
        (value, item) => value + item.quantity,
        0
      );
    
      const totalPrice = cartItems.reduce(
        (value, item) => value + item.quantity * item.price,
        0
      );
    return(
        <div className="container mx-auto">
        <div className="flex gap-4 m-5">
          <div className="flex-grow border flex justify-center items-center p-5">
            <h1 className="text-2xl font-semibold">{totalQuantity}</h1>
          </div>
          <div className="flex-grow border flex justify-center items-center p-5">
            <h1 className="text-2xl font-semibold">${Math.floor(totalPrice)}</h1>
          </div>
          <div className="flex-grow border flex justify-center items-center p-5">
            Proceed to Checkout
          </div>
        </div>
      <div className="flex flex-col justify-center m-5">
        {
        cartItems.map((data) => (
        <div key={data.id} className="flex items-center border shadow p-4 m-1">
          <Image src={data.thumbnail} height={100} width={100}  />

          <div className="pl-3 w-1/2">
            <h1 className="text-blue-300">{data.title}</h1>
            <p>{data.description}</p>
            <h1>${data.price}</h1>

          <div className="flex gap-3 my-3">
            <Button onClick={()=> updateToCart(data.id,"plus")}>Plus</Button>
            <h1>{data.quantity}</h1>
            <Button onClick={()=> {
                if(data.quantity <= 1){
                    removeCart(data.id)
                }else{
                    updateToCart(data.id, "minus")
                }
            }}>Minus</Button>
          </div>
          </div>

          
        </div>
        ))
        }
      </div>
      </div>
    )
   }
   export default Carts;