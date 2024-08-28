import { useEffect } from "react";
function TodoInput({onChange , onClick , value}){
return(
    <div className="my-3 text-center">
        <input 
        onChange={onChange}
         className="border rounded-sm p-2"
          placeholder="Enter Name"
          value={value} 
          />
        <button
         onClick={onClick} 
        disabled ={value === ""}
        style={{backgroundColor : value === "" &&  'gray'}}
        className="p-2 px-3 ml-2 rounded-sm
         bg-orange-500 text-white">
            Add</button>

    </div>
);
}
export default TodoInput;