import { useState } from "react";
import Button from "./component/Button";
function UseState(){
//     const [count , setCount] = useState(10);   
// var handle = ()=>{setCount(count + 1)}

    const [userName , setUserName] = useState("");
    const [user , setUser] = useState(["Test"]);

    const addUser =()=>{
        setUser([...user , userName]);
        setUserName("");
    };
    const clear = () => {
        setUser([])
    }

  
    return(
    <>
    <div className="flex flex-col items-center m-20">
    <h1 className="text-[50px] text-center my-3">hi Hafiz 
    <span className="underline">{userName}</span>{" "}
         </h1>
    <div>
    <input
    value={userName}
     onChange = {(e)=>{setUserName(e.target.value)}} 
     placeholder="Enter Name" 
    className=" border p-2" />

    <Button text = {'Add'} onClick={addUser}/>
    <Button text = {'Clear'} onClick={clear}/>
    </div>
    {
        user.map((data , ind) => (
          <h1 key={ind}
           className="text-center text-white font-medium text-2xl my-3 p-4 bg-purple-500">
             {data}
             </h1>
        ))
    }


   {/* <Button text = 'Add 1' onClick={()=>setCount(count + 1)} />
   <Button text = 'Add 2' onClick={()=>setCount(count + 2)} />
   <Button text = 'Add 3' onClick={()=>setCount(count + 3)} />
   <Button text = 'Add 4' onClick={()=>setCount(count + 4)} /> */}

</div>
    </>
)
}
export default UseState;