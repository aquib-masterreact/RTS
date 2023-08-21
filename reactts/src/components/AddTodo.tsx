import {FormEvent, useState} from 'react'
import { useTodos } from '../Store/addTodo';
import '../App.css';
function AddTodo() {
    const[todo,setTodo] = useState("");
    const {handleAddTodo} = useTodos();
    const handleFormClick=(e:FormEvent<HTMLFormElement>) =>{
      
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }
  return (
    <form onSubmit={handleFormClick} className='form'>
      <input type='search' className='todoInput' name=''  value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Add Text Here'/>
      <button type='submit' className='submitTodo'>Add Todo</button>
    </form>
  )
}

export default AddTodo
