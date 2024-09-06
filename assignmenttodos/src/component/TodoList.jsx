import { data } from "autoprefixer";
import { useEffect, useState } from "react";

function TodoList({todos,onDelete}){
    useEffect(()=>{
        console.log("todos Change")
    },
     [onDelete]);
   
    return(
        <>
        {
      todos.map((todos,ind)=>{
        return(
          <div key={todos.id} className='flex justify-between
           bg-slate-100 w-3/6 mx-auto'>
            <h3 className='text-2xl text-left py-3 pl-2 font-mono'>
              {todos.todo}
              </h3>
              <button onClick={() => onDelete(todos.id)}
               className=' bg-red-200 rounded-sm p-2 px-4'>Delte</button>
          </div>
        )
      })
    }
        </>
    )
}
export default TodoList;