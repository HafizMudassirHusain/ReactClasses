import { useState } from "react";
import { createContext } from "react";

export const cartContext = createContext();
function cartContextProvider({children}){
 const [cartItem, setCartItem] = useState();

function addToCart(item){
    const arr = [...cartItem];
    const itemInd = arr.findIndex((data) => data.id == item.id)
    if(itemInd == -1){
        arr.push({...item, quantity : 1});
    }else{
        arr[itemInd].quantity++;
    }
    setCartItem([...arr]);
}

function updateToCart(id, type){
    const arr = [...cartItem];
    const itemInd = arr.findIndex((data) => data.id == id)
    if(type == 'plus'){
        arr[itemInd].quantity++;
    }else{
        arr[itemInd].quantity--;
    }
    setCartItem([...arr]);
}

function removeToCart(id, type){
    const arr = [...cartItem];
    const itemInd = arr.findIndex((data) => data.id == id)
    arr.splice(itemInd , 1);
    setCartItem([...arr]);
}

function isItemAdded(id) {
    const arr = [...cartItem];
    const itemInd = arr.findIndex((data) => data.id == id);
    if (itemInd == -1) {
      return null;
    } else {
      return arr[itemInd];
    }
  }

    return(
    <cartContext.Provider 
    value={{cartItem, addToCart, updateToCart,removeToCart
        ,isItemAdded
    }}>
        {children}
    </cartContext.Provider>
    )
}

export default cartContextProvider;