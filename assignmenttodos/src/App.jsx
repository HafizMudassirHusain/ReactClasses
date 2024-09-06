import { useCallback, useState } from 'react'
import './App.css'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList';
function App() {
  const [todo , setTodo] = useState("");
  const [todos , setTodos] = useState([
    {
      todo:'Reading Book',
      id : Date.now(),
      Complete: false,
    },
  ]);
  const handleAddtodo = useCallback(()=>{
    const todosArr = [...todos, {
      todo,
      id : Date.now(),
      Complete: false,
    },];
    setTodos([...todosArr]);
    setTodo("");
  },[todo])
  const handleDelete = useCallback((id)=>{

    const Filter = todos.filter((data) => data.id !== id) 
     setTodos([...Filter])
   },[todos])
  return (
    <>
    <div className='w-3/4 mx-auto'>
    <h1 className='m-10 text-center text-4xl font-bold'>ToDo App</h1>
    <TodoInput value ={todo} 
    onChange={(e)=>setTodo(e.target.value)}
    onClick={handleAddtodo}
    />
    <TodoList todos={todos} onDelete={handleDelete}/>
    </div>

    </>
  )
}

export default App
