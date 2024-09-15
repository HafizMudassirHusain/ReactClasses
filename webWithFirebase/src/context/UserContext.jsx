import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../pages/firebase'
import { Spinner } from "@nextui-org/react";
export const userContext = createContext();
function UserContextProvider({children}){
   const [user, setUser] = useState({
    isLogin:false,
    userInfo:{}
   });
 const [loading, setLoading] = useState(false)
 function onAuthChange(user){
    if(user){
        console.log("user mil gaya",user)
        setUser({
            isLogin:true,
            userInfo:{
                email:user?.email,
                name:user?.displayName,
                photoURL:user?.photoURL

            }
        })
        setLoading(false);

    }else{
       
        console.log("user nahi milaaa")
        setUser({isLogin:false,
                        userInfo:{}
                    }
        )
    }
 }
 useEffect(()=>{
    const subs = onAuthStateChanged(auth, onAuthChange)
    return subs
 },[])

    return(
    <userContext.Provider value={{user, setUser}}>
        {
        loading ? (
           <Spinner/>
        )
        :(
            children
        )
        }
        
    </userContext.Provider>
)
}
export default UserContextProvider;




























// import {createContext, useEffect, useState } from "react"
// import { onAuthStateChanged } from "firebase/auth";
// import auth from '../pages/firebase'
// import { Spinner } from "@nextui-org/react";
 
// export const userContext = createContext();

// function userContextProvider({children}){
//     const [user, setUser] = useState({
//         isLogin : false,
//         userInfo :{}
//     });
//    const [loading, setLoading] = useState()
//     function onAuthChange(user){
//       if(user){
//         console.log(user)
//         setUser({isLogin:true,
//             userInfo:{
//                name: user?.displayName,
//                photiURL: user?.photoURL,
//                email: user?.email
//             }
//         });
//       }else{
//         setUser({isLogin:false,
//             userInfo:{}
//         });
//     }
//     }

//     useEffect(() =>{
//         const subscriber = onAuthStateChanged(auth, onAuthChange);
//         return subscriber;
//     },[])


//     return(
//     <userContext.Provider value={{user, setUser}}>
//         {
//             loading ? (
//                 <div className="flex justify-center items-center">
//                     <Spinner/>
//                 </div>
//             ) : (
//                 children
//             )
//         }
//     </userContext.Provider>
// )
// }

// export default userContextProvider;





