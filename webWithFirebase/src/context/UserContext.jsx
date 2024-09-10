import {createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import auth from '../pages/firebase'
import { Spinner } from "@nextui-org/react";
 
export const userContext = createContext();

function userContextProvider({children}){
    const [user, setUser] = useState({
        isLogin : false,
        userInfo :{}
    });
   const [loading, setLoading] = useState()
    function onAuthChange(user){
      if(user){
        console.log(user)
        setUser({isLogin:true,
            userInfo:{
               name: user?.displayName,
               photiURL: user?.photoURL,
               email: user?.email
            }
        });
      }else{
        setUser({isLogin:false,
            userInfo:{}
        });
    }
    }

    useEffect(() =>{
        const subscriber = onAuthStateChanged(auth, onAuthChange);
        return subscriber;
    },[])


    return(
    <userContext.Provider value={{user, setUser}}>
        {
            loading ? (
                <div className="flex justify-center items-center">
                    <Spinner/>
                </div>
            ) : (
                children
            )
        }
    </userContext.Provider>
)
}

export default userContextProvider;





